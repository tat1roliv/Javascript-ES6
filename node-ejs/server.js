
const express = require('express');

//instanciando
const app = express();

//render
app.set("view engine", "ejs");

//rotas
app.get("/", function(req, res){
    const items = [
        { 
            "title": "D",
            "message": "teste teste 1"
        },
        { 
            "title": "E",
            "message": "teste teste 2"
        },
        { 
            "title": "M",
            "message": "teste teste 3"
        },
        { 
            "title": "A",
            "message": "teste teste 4"
        },
        { 
            "title": "I",
            "message": "teste teste 5"
        },
        { 
            "title": "S",
            "message": "teste teste 6"
        }
    ];
    res.render("pages/index" ,
        { 
            information : items 
        });//index.ejs
})

app.get("/sobre", function(req, res){
    res.render("pages/about");//about.ejs
})

//rodar servidor
app.listen(8080);
console.log("servidor rodando")

