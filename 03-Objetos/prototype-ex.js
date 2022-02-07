// Crie uma função construtora de Pessoas Deve conter nome, sobrenome e idade e um método no protótipo que retorne o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
   }

Pessoa.prototype.nomeCompleto  = function() {
    return this.nome + " " + this.sobrenome;
  };
  
const ada = new Pessoa('ada', 'maria', 99);

console.log(ada.nomeCompleto());



// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document


Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


// Liste os construtores dos dados abaixo

const li = document.querySelector('li');

li.constructor.name;//HTMLLIElement

li.click.constructor.name;//Function

li.innerText.constructor.name;//String

li.value.constructor.name;//Number

li.hidden.constructor.name;//Boolean

li.offsetLeft.constructor.name;//Number


// Qual o construtor do dado abaixo:
const test = li.hidden.constructor.name;//string

test.constructor.name;