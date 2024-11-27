const con = require('../connect/database')

const create = (req, res) => {
    
    let ClienteID = req.body.ClienteID == undefined ? null : req.body.ClienteID;
    let ProdutoID = req.body.ProdutoID == undefined ? null : req.body.ProdutoID;
    let TelefoneID = req.body.TelefoneID == undefined ? null : req.body.TelefoneID;
    let Datalancamento = req.body.Datalancamento;
    let Total = req.body.Total;
   


    let query = `INSERT INTO Pedidos (ClienteID, ProdutoID, TelefoneID, Datalancamento, Total) VALUES`
    query += `(${ClienteID}, ${ProdutoID}, ${TelefoneID}, '${Datalancamento}', '${Total}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM Pedidos', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const update = (req, res) => {
    let ClienteID = req.body.ClienteID == undefined ? null : req.body.ClienteID;
    let ProdutoID = req.body.ProdutoID == undefined ? null : req.body.ProdutoID;
    let TelefoneID = req.body.TelefoneID == undefined ? null : req.body.TelefoneID;
    let Datalancamento = req.body.Datalancamento;
    let Total = req.body.Total;
    const id = Number(req.params.id);
    let query = `UPDATE Pedidos SET ClienteID = ${ClienteID}, ProdutoID = ${ProdutoID}, TelefoneID = ${TelefoneID}, Datalancamento = '${Datalancamento}', Total = '${Total}' WHERE PedidosID = ${id}`;
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
    const query = `DELETE FROM Pedidos WHERE PedidosID = ?`
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