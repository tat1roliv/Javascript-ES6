/* form dados */

const contato = document.querySelector('#contato');
const dadosFormulario = {};

function handleChangeDados(event){
    dadosFormulario[event.target.name] = event.target.value;
    //console.log(dadosFormulario);
}

contato.addEventListener('change', handleChangeDados );
