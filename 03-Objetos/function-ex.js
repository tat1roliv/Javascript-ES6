// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
// html, com os seguintes parâmetros
// tag, classe e conteudo.

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



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmic

const novoH1 = document.createElement('h1').classList.add('titulo');
novoH1.innerHTML = 'novo texto';

paragrafos.appendChild(novoH1); //move

