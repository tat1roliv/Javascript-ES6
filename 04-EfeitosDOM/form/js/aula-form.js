
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
/* checkValidity*/
/* validationMessage */
/* setCustomeValidity */

const form = document.getElementById('contato');

function handleChangeValidacao(event) {
    const target = event.target;

    if(!target.checkValidity()) {
        target.classList.add('invalido');
        target.setCustomeValidity('Campo requerido');//msg geral para campos
        contato.nome.setCustomeValidity('Nome é um campo requerido');//especifico para um campo
        target.nextElementSibling.innerText = target.validationMessage;
    } else {
        target.classList.remove('invalido');
    }

}

form.addEventListener('change', handleChangeValidacao);

/* select */

const form3 = document.getElementById('contato');

function handleChangeSelect(event) {
    document.body.style.backgroundColor = event.target.value;
}

form3.addEventListener('change', handleChangeSelect);



/* diferentes inputs */
const form4 = document.getElementById('contato');
function handleChangeInputs(event) {
 console.log(event.target.value)
}
form4.addEventListener('change', handleChangeInputs);


/*checkbox*/
const form5 = document.getElementById('contato');
function handleChangeCheckbox(event) {
 if(event.target.checked)
 console.log(event.target.value);
}
form5.addEventListener('change', handleChangeCheckbox);

/*radio*/

const form6 = document.getElementById('contato');
function handleChangeRadio(event) {
    if(event.target.checked)
    console.log(event.target.value);
}
