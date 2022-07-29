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


//insertBefore 
//entre elementos
const script = document.querySelector('script');
body.insertBefore(div, script)


//"after"
const header = body.querySelector('header');
//body.insertBefore(div, header.nextSibling)


