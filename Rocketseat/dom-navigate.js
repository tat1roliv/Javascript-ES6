/*
DOM 
Navigate
*/


//parentElement
const body = document.querySelector('body');
console.log(body.parentNode);
console.log(body.parentElement);


//childNodes vs children
const element = document.querySelector('body');
console.log(element.childNodes); //nodeList + conta espaços
console.log(element.children); //htmlCollection + nao conta espacos entre tags do html


//firstChild vs firstElementChild
console.log(element.firstChild);
console.log(element.firstElementChild);


//lastChild vs lastElementChild
console.log(element.lastChild);
console.log(element.lastElementChild);


//nextSibling vs nextElementSibling
//previousSibling vs previousElementSibling
const el = document.querySelector('header');
console.log(el.nextSibling);
console.log(el.nextElementSibling);




