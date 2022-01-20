console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades
window.innerHeight; // retorna a altura do browser

/*
document.querySelector('h1'); 
document.body; // Retorna o body
*/

const titulo = document.querySelector('h1');
titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;
titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

