class Tabelas{
    init(conexao) {
        this.conexao = conexao

        this.criarLivros()
    }

    criarLivros() {
        const sql = 'CREATE TABLE IF NOT EXISTS livro (id int NOT NULL AUTO_INCREMENT, titulo varchar(50) NOT NULL, descricao varchar(255), autor varchar(20) NOT NULL, data_entrada datetime NOT NULL, estoque varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
        
        this.conexao.query(sql, erro =>{
            if (erro){
                console.log(erro)
            }else{
                console.log('Tabela livro criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas