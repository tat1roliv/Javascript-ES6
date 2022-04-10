// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos =  document.querySelectorAll('.fun p');

let acumulador = 0;
paragrafos.forEach((e) => {
    let textoP = e.innerText;
    acumulador += textoP.length;
});

console.log(acumulador);


//com reduce
const totalCarac = Array.prototype.reduce.call(paragrafos, (acum, item) => {
    return acum + item.innerText.length;
} , 0)

console.log(totalCarac);

// Crie uma nova function que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElement(tag, classe, conteudo){

    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null ;
    conteudo ? elemento.innerHTML = conteudo : null ;
    return elemento;
}

console.log(criarElement('h1', 'titulo', 'novo h1'));
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmic


const h1titulo = criarElement.bind(null, 'h1', 'titulo');

console.log(h1titulo('curso js'));
console.log(h1titulo('curso angular'));
