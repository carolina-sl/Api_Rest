const Livro = require('../models/livros');

module.exports = app => {
    app.get('/livros', (req, res) => res.send('você está na rota de livros e está realizando um get'))

    app.post('/livros', (req, res) => {
        const livro = req.body

        Livro.adiciona(livro, res)
        

    })

}

