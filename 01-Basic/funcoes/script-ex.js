// Crie uma função para verificar se um valor é Truthy
function verificaTrueFalse(valor){
    return !!valor;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
function retornaPerimetro(lado){
    return lado*4;
}
  
// Crie uma função que retorne o seu nome completo com parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return nome + " " + sobrenome;
}

// Crie uma função que verifica se um número é par
function verificaPar(valor){
    if (valor % 2 == 0){
        return 'par';
    } else{
        return 'impar';
    }
}

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDado(dado){
    return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo quando o evento 'click' ocorrer
addEventListener('click', function(){
    console.log('ada maria')
});


