function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(4))

/**/

function pi() {
    return 3.14;
   }

let total = 5 * pi(); // 15.7
console.log(total)

/**/

//recebendo parametros
function imc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
   }
//passando argumentos
console.log(imc(80, 1.80))

/**/

function imc2(peso, altura) {
    const imc2 = peso / (altura * altura);
    console.log(imc2);
   }
   imc2(80, 1.80); // retorna o imc
   console.log(imc2(80, 1.80)); // retorna o imc e undefined (function sem retorno)
   
/**/

// funcao como argumento
addEventListener('click', function() {
    console.log('Clicou');
});

/**/

//escopo

/*
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises `
   }
   console.log(totalPaises); 
 */  

/**/

//escopo lexico

var profissao = 'Designer';

function dados() {

    var name = 'Ada';
    var age = 99;

    function outrosDados() {
        let city = 'Colonia';
        let job = 'developer';
        return `${name }, ${age}, ${city}, ${job}`;
    }

 return outrosDados();

}

console.log(dados()); // Retorna
//outrosDados(); // retorna um erro

/**/

   
   