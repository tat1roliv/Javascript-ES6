//[].forEach()
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array) {
 console.log(item.toUpperCase());
});
// com Arrow Function
carros.forEach((item, index, array) => {
 console.log(item.toUpperCase());
});




//arrow Function
const li = document.querySelectorAll('li');
li.forEach(i => i.classList.add('ativa'));
li.forEach(function(item) {
 item.classList.add('ativa');
});



//modif array original functionconst carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach((item, index, array) => {
    array[index] = 'Carro ' + item;
   });
   carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']





//[].map()
const carros = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros.map((item) => {
 return 'Carro ' + item;
});
carros; // ['Ford', 'Fiat', 'Honda']
newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 



//Valor Retornado
const carros = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros.map((item) => {
 const novoValor = 'Carro ' + item;
});
newCarros; // [undefined, undefined, undefined];





//Arrow Function e [].map()
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);
numerosX3; // [6, 12, 18, 24, 30, 36, 42];





//[].map() vs [].forEach()
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);
numerosX3; // [6, 12, 18, 24, 30, 36, 42];




//[].map() com Objetos
const aulas = [
    {
    nome: 'HTML 1',
    min: 15
    },
    {
    nome: 'HTML 2',
    min: 10
    },
    {
    nome: 'CSS 1',
    min: 20
    },
    {
    nome: 'JS 1',
    min: 25
    },
   ]

   const puxarNomes = aula => aula.nome;
   const nomesAulas = aulas.map(puxarNomes);
   // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']



//[].reduce()
const aulas = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
 return acumulador + atual;
});
total1; // 65
const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165

/*
//Reduce Passo a Passo 1
// 1
aulas.reduce((0, 10) => {
    return 0 + 10;
   }, 0); // retorna 10
   // 2
   aulas.reduce((10, 25) => {
    return 10 + 25;
   }, 0); // retorna 35
   // 3
   aulas.reduce((35, 30) => {
    return 35 + 30;
   }, 0); // retorna 65


const aulas = [10, 25, 30];
// 1
aulas.reduce((10, 25) => {
 return 10 + 25;
}) // retorna 35
// 2
aulas.reduce((35, 30) => {
 return 35 + 30;
}) // retorna 65

  */    