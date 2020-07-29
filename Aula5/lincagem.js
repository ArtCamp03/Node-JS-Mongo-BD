const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'Blackdog', {
    host: "localhost",
    dialect: "mysql"
})

/*
sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!!");
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro);
})

*/

const Postagem = sequelize.define('postagens' ,{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//inserir dados
Postagem.create({
    titulo: "Um titulo Qualquer",
    conteudo: "Qualquer conteudo"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
})
//criando usuario

Usuario.create({
    nome: "Victor",
    sobrenome: "Borralhao",
    idade: 20
})

//Usuario.sync({force: true});