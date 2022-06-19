
/* forms */
document.forms; // lista com os formulários
document.forms[0];
document.forms.contato; // form com nome contato => o que tiver no atributo name=""
document.forms.contato.elements; // elementos
document.forms[0].elements[0].value; // valor do primeiro


/* values */
/*keyup ou change*/
const form2 = document.getElementById('contato');

/*digiticao ao toque*/
function handleKeyUp(event) {
 console.log(event.target.value);
}
form2.addEventListener('keyup', handleKeyUp);

/*apos concluir a digitacao + pega digitacao por audio*/
function handleChange(event) {
    console.log(event.target.value);
   }
form2.addEventListener('change', handleChange);


/* validacao */
const form = document.getElementById('contato');
function handleChange(event) {
 const target = event.target;
 if(!target.checkValidity()) {
 target.classList.add('invalido');
 target.nextElementSibling.innerText =
target.validationMessage;
 } else {
 target.classList.remove('invalido');
 }
}
form.addEventListener('change', handleChange);

/* select */

const form3 = document.getElementById('contato');
function handleChange(event) {
 document.body.style.backgroundColor = event.target.value;
}
form3.addEventListener('change', handleChange);



/* diferentes inputs */
const form4 = document.getElementById('contato');
function handleChange(event) {
 console.log(event.target.value)
}
form4.addEventListener('change', handleChange);


/*checkbox*/
const form5 = document.getElementById('contato');
function handleChange(event) {
 if(event.target.checked)
 console.log(event.target.value);
}
form5.addEventListener('change', handleChange);

/*radio*/

const form6 = document.getElementById('contato');
function handleChange(event) {
 if(event.target.checked)
 console.log(event.target.value);
}