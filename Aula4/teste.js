const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'Blackdog', {
    host: "localhost",
    dialect: "mysql"
})

//criando tabela no mysql pelo Sequileze
const Postagem = sequilize.define('postagens' ,{
    titulo: {
        type: Sequilize.STRING
    },
    conteudo: {
        type: Sequilize.TEXT
    }
})

Postagem.sync({force: true});