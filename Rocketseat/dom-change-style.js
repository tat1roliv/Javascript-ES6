/*
DOM 
Change style
*/

//style
const element = document.querySelector('body');
element.style.backgroundColor = 'light';
console.log(element.style.backgroundColor);


//classList
console.log(element.classList);

//add
element.classList.add('active', 'cyan');
console.log(element.classList);

//remove
element.classList.remove('active');
console.log(element.classList);

//toggle
element.classList.toggle('active');
console.log(element.classList);



