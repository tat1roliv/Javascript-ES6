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

const tempoAulas = aulas.map(aula => aula.min);

function nomeAulas(aula){
    return aula.nome;
}

//const arrayNomeAulas = aulas.map(nomeAulas);//recebendo diretamente a funcao

const arrayNomeAulas = aulas.map(function (aula){
    return aula.nome;
});
/*
const nomeAulas = function (aula){
    return aula.nome;
}
*/

//[].reduce()
const aulas = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
 return acumulador + atual;
});
total1; // 65
const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165





//Maior Valor com [].reduce()
const numeros = [10, 25, 60, 5, 35, 10];
const maiorValor = numeros.reduce((anterior, atual) => {
 return anterior < atual ? atual : anterior;
});
maiorValor; // 60

const maiorValor2 = numeros.reduce((anterior, atual) => {
    if(anterior>atual)  {
        return anterior;
    } else{
        return atual;
    }
   } 0);

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
   const listaAulas = aulas.reduce((acumulador, atual, index) => {}, {});


 

//[].reduceRight()
const frutas = ['Banana', 'Pêra', 'Uva'];
const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);

const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);
frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva


//[].some()
//procura um primeiro true
const frutas = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
 return fruta === 'Uva';
}); // true
function maiorQue100(numero) {
 return numero > 100;
}
const numeros = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100); // true






//[].every()
//!!'' procura um primeiro false
const frutas = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas.every((fruta) => {
 return fruta; // false
});
const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every(x => x > 3); // true




//[]find()findIndex()
const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas.findIndex((fruta) => {
    return fruta === 'Uva';
   }); // 2
   const numeros = [6, 43, 22, 88, 101, 29];
   const buscaMaior45 = numeros.find(x => x > 45); // 88
   


   //[].].filter()
      const frutas = ['Banana', undefined, null, '', 'Uva', 0,
'Maçã'];
const arrayLimpa = frutas.filter((fruta) => {
 return fruta;
}); // ['Banana', 'Uva', 'Maçã']
const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]



// /Filter em Objetos
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
   
   //const aulasMaiores = aulas.filter((aula) => {};
    // [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
   