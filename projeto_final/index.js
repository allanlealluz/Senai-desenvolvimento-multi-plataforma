import express from "express";
import exphbs from "express-handlebars";
import sqlite3 from "sqlite3"
import { open } from 'sqlite'
const dbPromise = open({
    filename: 'data.db',
    driver: sqlite3.Database
})

const app = express();
app.use(express.urlencoded({extended:false}))
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/",(req, res) => {
    res.render('login'); // Passar um objeto contendo as mensagens
});

const setup = async () => {
        const db = await dbPromise
        await db.migrate()
        app.listen(8000, () => {
          console.log('listening on localhost:8000')
        })
}
setup()