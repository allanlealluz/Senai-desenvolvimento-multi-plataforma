import express from "express";
import exphbs from "express-handlebars";
import sqlite3 from "sqlite3";
import { open } from 'sqlite';
import session from 'express-session';
import SQLiteStore from 'connect-sqlite3';

// Database setup
const dbPromise = open({
  filename: 'data.db',
  driver: sqlite3.Database
});
const app = express();
const SQLiteStoreSession = SQLiteStore(session);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('imgs'));
app.use('/static', express.static(__dirname + '/public'));

// View engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(session({
    store: new SQLiteStoreSession({ db: 'sessions.db' }),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
}));

// Routes
app.get("/", (req, res) => {
    res.render('login');
});

app.get("/cadastrar", (req, res) => {
    res.render("cadastro");
});

app.post("/cadastra", async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha
    const db = await dbPromise;
    try {
        await db.run(`INSERT INTO Usuarios (nome, email, senha) VALUES (?, ?, ?)`, [nome, email, senha]);
        res.redirect("/");
    } catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).send("Erro ao cadastrar usuário");
    }
});

app.post("/login", async (req, res) => {
    const { email, senha } = req.body;
    const db = await dbPromise;
    try {
        const user = await db.get(`SELECT * FROM Usuarios WHERE email = ? AND senha = ?`, [email, senha]);
        if (user) {
            req.session.userId = user.id;
            res.redirect("/novaCateg");
        } else {
            res.redirect("/");
        }
    } catch (err) {
        console.error("Error logging in:", err);
        res.status(500).send("Erro ao fazer login");
    }
});

app.get("/novaCateg", async (req, res) => {
    const db = await dbPromise;
    if (req.session.userId) {
        const categorias = await db.all('SELECT * FROM Categorias');
        res.render("novaCategoria", { categorias });
    } else {
        res.redirect("/");
    }
});
app.post("/novaCateg", async (req, res) => {
    const nome = req.body.nome;
    const db = await dbPromise;
    const categorias = await db.all("SELECT * FROM Categorias")
    try {
        await db.run(`INSERT INTO Categorias (nome) VALUES (?)`, [nome]);
        res.render("/novaCateg", {categorias})
    } catch (err) {
        console.error("Error inserting category:", err);
    }
});
app.get("/novoProd", async(req,res)=>{
    if (req.session.userId) {
        const db = await dbPromise;
        const produtos = await db.all('SELECT * FROM Produtos');
        const categorias = await db.all('SELECT * FROM Categorias');
        res.render("NovoProduto", { produtos,categorias});
    } else {
        res.redirect("/");
    }
})
app.post("/novoProd", async (req, res) => {
    const { nome, preco, descricao, categoria_id } = req.body;
    const db = await dbPromise;
    try {
        await db.run(`INSERT INTO Produtos (nome, preco, descricao, categoria_id) VALUES (?, ?, ?, ?)`, [nome, preco, descricao, categoria_id]);
        res.redirect("/novoProd");
    }     catch (err) {
        console.error("Error inserting product:", err);
    }
});
app.get("/UltimoPed",(req,res)=>{
    if (req.session.userId) {
        res.render("UltimosPedidos");
    } else {
        res.redirect("/");
    }
})
app.get("/excluirCateg/:id", async (req, res) => {
    const id = req.params.id;
    const db = await dbPromise;
    try {
        await db.run(`DELETE FROM Categorias WHERE id = ?`, [id]);
        res.redirect("/novaCateg");
    } catch (err) {
        console.error("Error deleting category:", err);
    }
});
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error logging out:", err);
            res.status(500).send("Erro ao fazer logout");
        } else {
            res.redirect("/");
        }
    });
});

// Server initialization
const setup = async () => {
    try {
        const db = await dbPromise;
        await db.migrate(); // Ensure migrations are run
        app.listen(8000, () => {
            console.log(`Server is running on http://localhost:8000`);
        });
    } catch (err) {
        console.error("Error starting server:", err);
    }
};

setup();
