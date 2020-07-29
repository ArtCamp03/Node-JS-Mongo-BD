// *** Ultilizando SEQUELIZE DB ** 

const express = require("express");
const app = express();
//instalando Handlebars
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
const { RSA_NO_PADDING } = require("constants");

//config
//Template Enginer 
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//rotas 

app.get('/', function (req, res) {
    //retorna tds os posts existentes
    //DESC >> mais novo para anigo , ASC antigo >> mais novo
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts) {
        console.log(posts)
        res.render('home', { posts: posts })
    })
})

app.get('/cad', function (req, res) {
    res.render('formulario')
})

app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/')
    }).catch(function (erro) {
        res.send('Houve um erro !!' + erro)
    })

    //ultilizando os dados do formulario
    // res.send("Texto: "+req.body.Titulo+"  Conteudo: "+req.body.conteudo);
})

app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Popstagem deletada com sucesso !!")
    }).catch(function(erro){
        res.send("Essa postagem nao existe!!")
    })
})

app.listen(8081, function () {
    console.log("Servidor rodando na url http;//localhost:8081");
});

