/*
DOM 
Manipulate content
*/

//textContent
const textContent = document.querySelector('h1');
textContent.textContent = 'new title';
textContent.textContent += ': 2';

console.log(textContent);

//innerHTML
//trocar html internos
const changeHtml = document.querySelector('h2');
changeHtml.innerHTML = '<em>lorem ipsum</em> dolor sit amet'


//value
//inputs ou outros elementos que recebem o value
const elementValue  = document.querySelector('input')
elementValue.value = "outro valor";


//atributos
//add
const header = document.querySelector('header');
header.setAttribute('id', 'header');

//get
const headerID = document.querySelector('#header');
console.log(headerID.getAttribute('id'));

//remove
headerID.removeAttribute('id');
console.log(headerID);

