/*
* TIPOS DE DADOS
*/

/*
* DADOS PRIMITIVOS
    string
    numbers
    boolean
    undefined
    symbol
    bigint
*/

/*
* DADOS ESTTUTURAIS 
    objeto
        -array
        -map
        -set
        -Date
        -...
    function
*/

/*
* DADO PRIMITIVO ESTRUTURAL
    null
*/


/*string*/
console.log(" 'inception' string");
console.log(`soma : ${1+1}`);


/*numbers*/
console.log(13);
console.log(83.1);
//Not a Number (NaN) 
console.log(83.1 / "string");
//infinito (Infinity)
console.log(83.1 === Infinity);


/*boolean*/
console.log(true);
console.log(false);


/*undefined*/
/*null*/
//nulo || objeto vazio
console.log(undefined === null);


/*objeto*/
// objeto | atributos | metodos
console.log({
    name: "ada",
    age: "99",
    walks: function() {
        console.log("walks");
    }
});


/*array*/
console.log([
    "ada",
    99
]);

