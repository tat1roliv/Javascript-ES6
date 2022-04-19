/*setTimeout(callback, tempo, arg1, arg2, ...)*/
function espera(texto) {
  console.log(texto);
 }
 setTimeout(espera, 1000, 'Depois de 1s');
 

/* setTimeout this / arrow function */

const btn = document.querySelector('button');
btn.addEventListener('click', handleCLick);

function handleCLick() {
  setTimeout(() => {
    console.log(this)
    this.classList.add('active');
  }, 1000)
}

setTimeout(() => {
  console.log('Testando')
}, 0);


/* setTimeout com loop */

for(let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300 * i)
}

/* setInterval(callback, tempo, arg1, arg2, ...) */
 setInterval(loop, 1000, 'Passou 1s');
 // loop a cada segundo
 
 let i = 0;

 setInterval(() => {
  console.log(i++);
 }, 1000);


// setInterval(loop, 300, '300ms');

let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++);
  if(i > 20) {
    clearInterval(meuLoop)
  }
}, 500);

/*clearInterval(var)*/

const contarAte10 = setInterval(callback, 1000);
let i = 0;

function callback() {
  console.log(i++);
  if (i > 10) {
    clearInterval(contarAte10);
  }
}


