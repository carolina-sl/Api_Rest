const conexao = require('../infraestrutura/conexao')
//const moment = require('../infraestrutura/moment')


class Livro{

    adiciona(livro, res) {
        const data_entrada = new Date()
        const livroDatado = {...livro, data_entrada}
        const sql = 'INSERT INTO livro SET ?'
        
        conexao.query(sql, livroDatado, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            }else {
                res.status(201).json(resultados)
            }
        })
    }
}

module.exports = new Livro