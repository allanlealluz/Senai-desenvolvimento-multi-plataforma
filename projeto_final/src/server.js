const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./pizzaria.db');

// Middleware para parsear o body das requisições
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para cadastro de usuários
app.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;
  db.run('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Usuário cadastrado com sucesso', id: this.lastID });
  });
});

// Endpoint para obter a lista de pizzas
app.get('/pizzas', (req, res) => {
  db.all('SELECT id, name, ingredients, price FROM pizzas', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ pizzas: rows });
  });
});
app.get("/search", (req,res) => {
  db.all('SELECT * FROM users ', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ pizzas: rows });
  });
})
// Iniciar o servidor em uma porta diferente
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Fechar o banco de dados quando o servidor for encerrado
process.on('SIGINT', () => {
  db.close();
  console.log('Banco de dados fechado');
  process.exit(0);
});
