/*
DOM 
Create Elements
*/

//createElement
const div = document.createElement('div');
div.innerText = 'hola';


//append
const body = document.querySelector('body');
body.append(div);


//prepend
body.prepend(div);

