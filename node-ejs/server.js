
const express = require('express');

//instanciando
const app = express();

//render
app.set("view engine", "ejs");

//rotas
app.get("/", function(req, res){
    res.render("pages/index");//index.ejs
})

app.get("/sobre", function(req, res){
    res.render("pages/about");//about.ejs
})

//rodar servidor
app.listen(8080);
console.log("servidor rodando")

