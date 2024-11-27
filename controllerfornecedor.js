const con = require('../connect/database')

const create = (req, res) => {
    let nome = req.body.nome;
    let cnpj = req.body.cnpj;
    let email = req.body.email;
    

    let query = `INSERT INTO Fornecedores (nome, cnpj, email) VALUES`
    query += `('${nome}', '${cnpj}', '${email}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM Fornecedores', (err,result) =>{
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const update = (req,res) =>{
    let id = Number(req.params.id);
    let nome = req.body.nome;
    let cnpj = req.body.cnpj;
    let email = req.body.email;


    let query = `UPDATE Fornecedores SET nome = '${nome}', cnpj = '${cnpj}', email = '${email}' WHERE FornecedorID = ${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id = Number(req.params.id); 
    const query = `DELETE FROM Fornecedores WHERE FornecedorID = ?`
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create, 
    read,
    update,
    deletar
}