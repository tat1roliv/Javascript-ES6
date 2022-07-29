/*
DOM 
Eventos
*/

//onclick event
function print(){
    console.log("print")
}


//onkeyup event
//onkeypress event
const input = document.querySelector('input');

//input.onkeyup = function(){  console.log("print onkeyup") }


//addEventListener
const h1 = document.querySelector('h1');

h1.addEventListener("mouseover", print);



//event
input.onkeypress = function(event){
    console.log(event.currentTarget.value);
    console.log(event.currentTarget);
    console.log(event.key);
}





