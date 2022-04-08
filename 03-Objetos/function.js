//class function
function areaQuadrado(lado) {
    return lado * lado;
   }

const perimetroQuadrado = new Function('lado', 'return lado *4');
   

//metodos
Function.prototype.call;

//cal function.call(this, arg1, arg2, ...)
const carro = {
    marca: 'Ford',
    ano: 2018
   }
   function descricaoCarro() {
    console.log(this.marca + ' ' + this.ano);
   }
   descricaoCarro() // undefined undefined
   descricaoCarro.call() // undefined undefined
   descricaoCarro.call(carro) // Ford 2018


const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
 console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
 console.log(item);
}); // Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
 console.log(item);
}); // Log de cada Frut

///ex
function Dom(seletor) {
    this.element = document.querySelector(seletor);
   };

const ul = new Dom('ul');
console.log(ul);

Dom.prototype.ativo = function(classe) {
this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);

//array-like 
const li = document.querySelectorAll('li');
const filtro = Array.prototype.filter.call(li, function(item) {
 return item.classList.contains('ativo');
});
filtro; // Retorna os itens que possuem ativo

   
   