/*
* operadores aritimeticos
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