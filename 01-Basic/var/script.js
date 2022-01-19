// var | let | const //

// ES5
var x = function(x, y) {
    return x * y;
 }
 
 // ES6
 const x = (x, y) => x * y;

 //////////////////////////////////////////////////////////////

 var x = 10;
 // Here x is 10
 {
   let x = 2;
   // Here x is 2
 }
 // Here x is 10 


 //////////////////////////////////////////////////////////////

var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro
