// Utilizando o foreach na array abaixo  some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Taxa Cliente',
      valor: 'R$ 49',
    },
  ];
  
let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((obj) => {
    
    const numeroTratado = +obj.valor.replace('R$ ', '');//converte em string e retira txt

    if(obj.descricao.slice(0,4) === 'Taxa'){
        taxaTotal = taxaTotal + numeroTratado;
    }

    else if(obj.descricao.slice(0,11) === 'Recebimento'){
    recebimentoTotal = recebimentoTotal + numeroTratado;
    }

});

console.log(taxaTotal); 
console.log(recebimentoTotal);
  
  
  
// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);
  

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;

const htmlText = html;
const htmlArray = htmlText.split('span');
const htmlNovo = htmlArray.join('a');

console.log(htmlNovo);

               
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1));
  


// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';
(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

let taxasTotalTransacoes = 0;
transacoes2.forEach((elemento) => {
    elemento = elemento.toLowerCase();
    elemento = elemento.trim();
    
    if(elemento.slice(0,4) === 'taxa'){
        taxasTotalTransacoes = taxasTotalTransacoes + 1;
    }

})

console.log(taxasTotalTransacoes);
  