-- Up

CREATE TABLE Categorias (
    id INTEGER PRIMARY KEY,
    nome STRING
);

CREATE TABLE Usuarios (
    id INTEGER PRIMARY KEY,
    nome STRING,
    senha STRING,
    email STRING
);

CREATE TABLE Produtos (
    id INTEGER PRIMARY KEY,
    nome STRING,
    descricao STRING,
    preco REAL,
    categoria_id INTEGER,
    FOREIGN KEY (categoria_id) REFERENCES Categorias(id)
);

-- Down

DROP TABLE IF EXISTS Produtos;
DROP TABLE IF EXISTS Usuarios;
DROP TABLE IF EXISTS Categorias;
