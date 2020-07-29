//Codigo responsavel por explicar sobre rotas do servidor
const express = require("express");
const { RSA_NO_PADDING } = require("constants");

const app = express();

//criar um servidor usando express

//enviar arquivo 
//arquivo no diretorio usamos "_dirname"
app.get("/", function(req, res){
    res.sendFile(__dirname + "/HTML/index.html");
});

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre");
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog");
});

//Parametros
//podems er atribuidos usando "/:"
//modulo "req.params" acessa um parametro especifico
//re.params.(o parametro qe quer acessa o parametro)
app.get('/ola/:nome/:cargo/:cor',function(req, res){
    res.send("<h1>Ola "+req.params.nome+"</h1>" + "<h2> Seu cargo e: " +req.params.cargo+"</h2>" +"<h3> Sua cor preferida e: " +req.params.cor+ "</h3");

    // "send " so pode ser enviado uma unica vez

});

app.listen(80, function(){
    console.log("Servidor Rodando Com Sucesso!!");
});
//localhost:80
//express é orientado a rotas!!