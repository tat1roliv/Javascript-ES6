/*

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/

const registros = {
    entradas: [35124, 38000, 4000],
    saidas: [8000, 1000, 6000, 10000, 15000, 1865, 3000, 1500, 10000, 7000, 3000, 10000]
}


function sumEntradas(registros) {
    let totalEntradas = 0;

    for (let i = 0; i < registros.entradas.length; i++) {
        totalEntradas += registros.entradas[i];
    }

    return totalEntradas;
}

function sumSaidas(registros) {
    let totalSaidas = 0;

    for (let j = 0; j < registros.saidas.length; j++) {
        totalSaidas += registros.saidas[j];
    }

    return totalSaidas;
}

function calculaSaldo(registros){
    let tEntradas = sumEntradas(registros);
    let tSaidas= sumSaidas(registros);
    return tEntradas - tSaidas;
}

function imprimeTela(registros){
    console.log('Total de entradas : '+ sumEntradas(registros))
    console.log('Total de saídas : '+ sumSaidas(registros))
    console.log('Saldo : '+ calculaSaldo(registros))
}

imprimeTela(registros);
