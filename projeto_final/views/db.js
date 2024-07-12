const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./pizzaria.db');

// Função para criar a tabela de usuários se não existir
function createUsersTable() {
  return new Promise((resolve, reject) => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL
    )`, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

// Função para criar a tabela de pizzas se não existir
function createPizzasTable() {
  return new Promise((resolve, reject) => {
    db.run(`CREATE TABLE IF NOT EXISTS pizzas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      ingredients TEXT NOT NULL,
      price REAL NOT NULL
    )`, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

// Executar a criação das tabelas
createUsersTable()
  .then(createPizzasTable)
  .catch(err => {
    console.error(err.message);
  })
  .finally(() => {
    db.close();
  });
