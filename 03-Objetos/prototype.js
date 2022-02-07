   /*Prototype*/

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
   }

const ada = new Pessoa('Ada', 99);
console.log(Pessoa.prototype); // retorna o objeto
console.log(ada.prototype); // undefined
   

Pessoa.prototype.andar = function() {
    return this.nome + ' andou';
   }
   Pessoa.prototype.nadar = function() {
    return this.nome + ' nadou';
   }
   console.log(Pessoa.prototype); // retorna o objeto

    
/*Prototype acesso*/

const ada2 = new Pessoa('ada2', 98);
ada2.nome;
ada2.idade;
ada2.andar();
ada2.nadar();

//ada2.__proto__;

Object.prototype;
ada2.toString();
ada2.isPrototypeOf();
ada2.valueOf();


/* construtores nativos */

const pais = 'Brasil';
const cidade = new String('Rio');
pais.charAt(0); // B
cidade.charAt(0); // R
String.prototype;


// Transforma em array
const lista = document.querySelectorAll('li');
const listaArray = Array.prototype.slice.call(lista);

//*es6 converte array*//
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype)

dado.constructor.name // retorna o nome do construtor;

const Carro = {
    marca: 'Ford',
    preco: 2000,
    acelerar() {
        return true;
    }
   }
   Carro // Object
   Carro.marca // String
   Carro.preco // Number
   Carro.acelerar // Function
   Carro.acelerar() // Boolean
   Carro.marca.charAt // Function
   Carro.marca.charAt(0) // String
   
   
