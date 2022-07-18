/*
* MANIPULACAO DADOS
*/



/*
* prototype
js => prototype-based language
    prototype chain
    __proto__
*/
"Ada".__proto__;
"adinha".length;

23.0.__proto__;
23.0.hasOwnProperty();

true.__proto__;




/*typecasting x type coersion
user x js
*/
//coersion
console.log('9' + 5); //95

//typecasting
console.log(Number('9') + 5);//14

let string = '1230';
console.log(Number(string));

let number = 321;
console.log(String(number));



//Strings e Numeros
let word = 'test';
console.log(word.length);

word.toUpperCase();
console.log(word);
console.log(word.toUpperCase());

let num = 12345;
console.log(String(num).length);

let n = 45698.785435;
console.log(n.toFixed(2).replace(".", ","));
//console.log(Number(n.toFixed(2).replace(".", ",")));//NaN
/*
toFixed return string
Number nao aceita ,
*/



/*Strings*/
let phrase = 'lorem ipsum dolor sit'
console.log(phrase.includes('lorem'));
console.log(phrase.includes('Lorem'));



let texto  = 'lorem ipsum dolor sit'
let textoArray = texto.split(" ")
//let myArray = texto.split("o")

let textoEdit = textoArray.join("_")
console.log(textoEdit.toUpperCase())



/*Array*/
let myArray = new Array('a', 'b','c')
console.log(myArray)


console.log(["a", {type: "array"}, function(){return 'hola'}].length)


let palavra = 'manipulacao';
console.log(Array.from(palavra))



let techs = ['html', 'css', 'js']

console.log(techs.push('node'))
console.log(techs.unshift('sql'))
console.log(techs)

//techs.pop()
//console.log(techs)

//techs.shift()
//console.log(techs)

//console.log(techs.slice(1,3))
//console.log(techs.splice(1,3))

let index = techs.indexOf('node')
techs.splice(index, 1)
console.log(techs)