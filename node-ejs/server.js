
const express = require('express');

//instanciando
const app = express();

//render
app.set("view engine", "ejs");

//rotas
app.get("/", function(req, res){
    res.render("index");//index.ejs
})

app.get("/sobre", function(req, res){
    res.render("about");//about.ejs
})

//rodar servidor
app.listen(8080);
console.log("rodando")

