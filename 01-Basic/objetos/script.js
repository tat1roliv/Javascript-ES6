var pessoa = {
  nome: 'ada',
  idade: 99,
  profissao: 'designer',
  possuiFormacao: true,

}

console.log(pessoa.nome, pessoa.idade, pessoa.profissao, pessoa.possuiFormacao);

/**/

const quadrado = {
  area: function(lado) {
  return lado * lado;
  },
  perimetro: function(lado) {
  return lado * 4;
  },
 }

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5)); 

/**/
//setando atributos para o objeto
var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';

console.log(menu.width, menu.height, menu.position);
 

/**/
//this
var altura = 120;
var menuTela = {
    largura: 800,
    altura: 50,
    metadeHeight() {
    return this.altura / 2;
  }
}
console.log(menuTela.metadeHeight());

/**/
var menuWeb = {
  width: 800,
 }
 menuWeb.hasOwnProperty('width') // true
 menuWeb.hasOwnProperty('height') // false