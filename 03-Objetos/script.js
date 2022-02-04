 function Carro(marca, precoInicial) { //construtor => PascalCase
  this.marca = marca;
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
 }
 

 const honda = new Carro('Honda', 4000);
 const fiat = new Carro('Fiat', 3000);

 console.log(honda.marca, honda.preco);


 /* ex 2 */


 //criando obj na var
 const Dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add('ativo');
  },
 }

 Dom.ativo(); // adiciona ativo ao li
 Dom.seletor = 'ul';
 Dom.ativo(); // adiciona ativo ao ul



 //usando construtor
 function DomConstrutor() {
  this.seletor = 'li';
  const element = document.querySelector(this.seletor);
  this.ativo = function() {
    element.classList.add('ativo');
  };
 }
 const lista = new DomConstrutor();
 lista.seletor = 'ul';
 lista.ativo();
 const lastLi = new DomConstrutor();
 lastLi.seletor = 'li:last-child';
 lastLi.ativo();
 