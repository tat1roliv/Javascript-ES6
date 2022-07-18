/*
EXPRESSOES E OPERADORES
*/

//expression

/*
operators
    binary
    unary
    ternary
*/

/* unário */
let num = 1

console.log(++num)

/* binário */
let number = 1

console.log(number + 1)

/* ternário */
console.log(true ? 'alo' : 'nada')



/*
new
instanciando obj
*/

let data = new Date("2022-07-18")
console.log(data.__proto__)


/*
operadores unarios
delete
*/

const person = {
    name: 'ada',
    age: '99'
}

delete person.name;
console.log(person)