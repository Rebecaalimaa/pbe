const con = require('../connect/database')

const create = (req, res) => {
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let validade = req.body.validade;
    let FornecedorID = req.body.FornecedorID == undefined ? null : req.body.FornecedorID;



    let query = `INSERT INTO Produtos (nome, descricao, preco, validade, FornecedorID) VALUES`
    query += `('${nome}', '${descricao}', '${preco}', '${validade}', ${FornecedorID})`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM Produtos', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const update = (req, res) => {
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let validade = req.body.validade;
    let FornecedorID = req.body.FornecedorID == undefined ? null : req.body.FornecedorID;
    const id = Number(req.params.id);
    let query = `UPDATE Produtos SET nome = '${nome}', descricao = '${descricao}', preco = '${preco}', validade = '${validade}', FornecedorID = ${FornecedorID} WHERE ProdutoID = ${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(202).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id = Number(req.params.id);
    const query = `DELETE FROM Produtos WHERE ProdutoID = ?`
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(204).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deletar
}