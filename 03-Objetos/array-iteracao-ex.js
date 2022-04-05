// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const cursosArray = Array.from(cursos);

const objetoCursos = cursosArray.map( (curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('h1+p').innerText;
    const aulas = curso.querySelector('.aulas').innerText;
    const horas = curso.querySelector('.horas').innerText;

    return{
        titulo: titulo,
        descricao: descricao,
        aulas: aulas,
        horas: horas,
    }
});

console.log(objetoCursos);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numeros100 = numeros.filter((n) => {
    if (n>100) {
        return n;
    }
});
console.log(numeros100);
const numeros101 = numeros.filter(n => n > 100);
console.log(numeros101);







// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria',
'Teclado']

const vericaInstrumento = instrumentos.some((s) => {
    if( s == 'Baixo'){
        return true;
    }
}); 
console.log(vericaInstrumento);

const vericaInstrumento2 = instrumentos.some(s => s == 'Baixo');
console.log(vericaInstrumento2);




// Retorne o valor total das compras
const compras = [
    {
    item: 'Banana',
    preco: 'R$ 4,99'
    },
    {
    item: 'Ovo',
    preco: 'R$ 2,99'
    },
    {
    item: 'Carne',
    preco: 'R$ 25,49'
    },
    {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
    },
    {
    item: 'Quejo',
    preco: 'R$ 10,60'
    }
]

//const valorTotalCompras = compras.map((e) => e.preco );
//console.log(valorTotalCompras);

const valorTotal = compras.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');
    //console.log(precoLimpo);
    return acumulador + precoLimpo;

}, 0);

console.log(valorTotal);
