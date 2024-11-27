const con = require('../connect/database')

const create = (req, res) => {
    let numero = req.body.numero;
    let ClienteID = req.body.ClienteID == undefined ? null : req.body.ClienteID;
    let FornecedorID = req.body.FornecedorID == undefined ? null : req.body.FornecedorID;
    let query = `INSERT INTO Telefone (numero, ClienteID, FornecedorID) VALUES`
    query += `('${numero}', ${ClienteID}, ${FornecedorID})`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM Telefone', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const update = (req, res) => {
    let numero = req.body.numero;
    let ClienteID = req.body.ClienteID == undefined ? null : req.body.ClienteID;
    let FornecedorID = req.body.FornecedorID == undefined ? null : req.body.FornecedorID;
    const id = Number(req.params.id);
    let query = `UPDATE Telefone SET numero = '${numero}', ClienteID = ${ClienteID}, FornecedorID = ${FornecedorID} WHERE TelefoneID = ${id}`;
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
    const query = `DELETE FROM Telefone WHERE TelefoneID = ?`
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