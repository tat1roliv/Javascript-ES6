/*
* operadores
*/

/* resto da divisão: sinal % */
let remainder
remainder = 11 % 9
console.log(remainder)

/* incremento: sinal ++ */
let increment = 0


/* ++variavel vs variavel++ */
//console.log(increment++)
console.log(++increment)
console.log(increment)

/* decremento: sinal -- */
let decrement = 0
decrement--
console.log(decrement)

/* exponencial: sinal ** */
console.log(3 ** 3)


/*grouping operator*/
let total = 2 + 3 * 5
console.log(total)//17

let total2 = (2 + 3) * 5
console.log(total2)//25


/*operador comparacao*/
let one = 1;
console.log(one == 1);//true
console.log(one == "1");//true
console.log(one === 1);//true
console.log(one === "1");//false


// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1

// addition assignment:
x += 2

// subtraction assignment:
x -= 1

// multiplication assignment
x *= 2

// division assignment
x /= 2

// exponetiation assignment
x **= 2

// remainder assignment(resto de divisão):
x %= 2



//*operadores logicos*//
//and &&
//or ||
//not !



/*operador ternario*/
//condição ? valor1 : valor2

let pao = false
let queijo = false

const niceBreakfast = pao && queijo ? 'yes' : 'no';
console.log(niceBreakfast);

let age = 21;
const canDrive = age >=18 ? 'yes' : 'no'; 
console.log(canDrive);




/* FALSY */
/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( 0 ?  'verdadeiro' : 'false');


/* TRUTHY */
/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( Infinity ? 'verdadeiro' : 'falso' );





