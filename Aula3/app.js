var http = require('http');

http.createServer(function(req,res ){
    res.end("ola");
}).listen(80);

console.log("Servidor rodando!!");