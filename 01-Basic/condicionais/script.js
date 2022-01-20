let possuiGraduacao = true;
let possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}

/////////////////////////

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul': 
    console.log('azul selecionado');
    break;
  case 'Vermelho':
    console.log('vermelho selecionado');
    break;
  case 'Amarelo':
    console.log('amarelo selecionado');
    break;
  default:
    console.log('nada selecionado');
}


////////////////////////////////////////////////////////////////

// Falsy //
/*
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou `
*/

/*
// Truthy //
if(true)
if(1)
if(' ')
if('ada')
if(-5)
if({})
*/

// Truthy !
/*
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
*/

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Ada';
var idade = 99;
var possuiA = false;
var empregoF;
var dinheiroNaConta = 0;

console.log( !!nome, !!idade, !!possuiA, !!empregoF, !!dinheiroNaConta );


/////////////////////////////////////////

//operadores
/*
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

= assigning values to a variable
== comparing two variables, but it ignores the datatype of variable
=== is used for comparing two variables, but this operator also checks datatype and compares two values
*/

///////////////////////////////////////////

//operadores logicos

//&& (* e)
/*
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
*/

//|| (+ ou)
/*
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true
*/

