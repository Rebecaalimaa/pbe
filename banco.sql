DROP DATABASE cantina;
CREATE DATABASE cantina;

USE cantina;

CREATE TABLE Clientes (
    ClienteID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    Nome VARCHAR(252) NOT NULL,
    Pagamento VARCHAR(100) NOT NULL
);

CREATE TABLE Fornecedores (
    FornecedorID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    CNPJ VARCHAR(14) NOT NULL UNIQUE, 
    Email VARCHAR(252) NOT NULL UNIQUE
);

CREATE TABLE Telefone (
    TelefoneID INT AUTO_INCREMENT PRIMARY KEY,
    Numero VARCHAR(100) NOT NULL UNIQUE,
    ClienteID INT,
    FornecedorID INT,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (FornecedorID) REFERENCES Fornecedores(FornecedorID)
);

CREATE TABLE Produtos (
    ProdutoID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(252) NOT NULL,
    Descricao VARCHAR(252),
    Preco FLOAT(10, 5) NOT NULL,
    Validade date NOT NULL,
    FornecedorID INT,
    FOREIGN KEY (FornecedorID) REFERENCES Fornecedores(FornecedorID)
);

CREATE TABLE Pedidos (
    PedidosID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT ,
    ProdutoID INT,
    TelefoneID INT,
    Datalancamento date NOT NULL,
    Total FLOAT(10, 5) NOT NULL,
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (ProdutoID) REFERENCES Produtos(ProdutoID),
    FOREIGN KEY (TelefoneID) REFERENCES Telefone(TelefoneID)
);