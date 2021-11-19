

module.exports = app => {
    app.get('/livros', (req, res) => res.send('você está na rota de livros e está realizando um get'))

    app.post('/livros', (req, res) => {
        console.log(req.body)
        res.send('você está na rota POST')

    })

}

