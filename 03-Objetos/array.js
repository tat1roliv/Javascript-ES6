//array
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];
const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor:
'Azul', preco: 2000}], function andar(nome) { console.log(nome)
}];
dados[2]('Ford');
dados[1][2].cor; // azul


const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corola', 'Mustang', 'Honda');
carros[1] // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11




//Array.from()
let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // Array
const carros = {
 0: 'Fiat',
 1: 'Honda',
 2: 'Ford',
 length: 4,
}
const carrosArray = Array.from(carros);




//Array.isArray()
let li = document.querySelectorAll('li'); // NodeList
Array.isArray(li); // false
li = Array.from(li); // Array
Array.isArray(li); // true



// /Array.of(), Array() e new Array()
Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4); // [1,2,3,4]




//Propriedades e Métodos do Prototype
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3
frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2




//Métodos Modificadores s [].sort()
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', Violão]
const idades = [32,21,33,43,1,12,8];
idades.sort();//string => ordem alfabetica
idades; // [1, 12, 21, 32, 33, 43, 8]




//[].unshift() e [].push()
const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];
carros.push('Ferrari'); // 6
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];





//[].shift() e [].pop() inicio e final
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // 'Ford'
carros; // ['Fiat', 'VW', 'Honda'];
const ultimoCarro = carros.pop(); // 'Honda'
carros; // ['Fiat', 'VW'];




//[].reverse()
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];

