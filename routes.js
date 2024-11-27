const express = require ('express')
const routes = express.Router();

const Clientes = require('./controllers/controllerclientes')
const Fornecedores = require('./controllers/controllerfornecedor')
const Telefone = require('./controllers/controllertelefone')
const Produtos = require('./controllers/controllerproduto')
const Pedidos = require('./controllers/controllerpedidos')


const teste = (req, res) => {
    res.json("Back-end respodendo com sucesso")
}

routes.get('/', teste)

routes.post('/Clientes', Clientes.create)
routes.get('/Clientes', Clientes.read)
routes.put('/Clientes/:id', Clientes.update)
routes.delete('/Clientes/:id', Clientes.deletar)

routes.post('/Fornecedores', Fornecedores.create)
routes.get('/Fornecedores', Fornecedores.read)
routes.put('/Fornecedores/:id', Fornecedores.update)
routes.delete('/Fornecedores/:id', Fornecedores.deletar)

routes.post('/Telefone', Telefone.create)
routes.get('/Telefone', Telefone.read)
routes.put('/Telefone/:id', Telefone.update)
routes.delete('/Telefone/:id', Telefone.deletar)

routes.post('/Produtos', Produtos.create)
routes.get('/Produtos', Produtos.read)
routes.put('/Produtos/:id', Produtos.update)
routes.delete('/Produtos/:id', Produtos.deletar)

routes.post('/Pedidos', Pedidos.create)
routes.get('/Pedidos', Pedidos.read)
routes.put('/Pedidos/:id', Pedidos.update)
routes.delete('/Pedidos/:id', Pedidos.deletar)


module.exports = routes
