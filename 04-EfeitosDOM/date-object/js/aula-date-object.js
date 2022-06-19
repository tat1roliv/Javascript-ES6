/* date object */
const agora = new Date();
agora;
// Semana Mês Dia Ano HH:MM:SS GMT
agora.getDate() ;// Dia
agora.getDay() ;// Dia da Semana ex: 5 = Fri
agora.getMonth() ;// Número dia mês 0-11
agora.getFullYear(); // Ano
agora.getHours(); // Hora
agora.getMinutes() ;// Minutos
agora.getTime() ;// ms desde 1 jan 1970
agora.getUTCHours() - 3 ; // Brasília


/*get time */
const tempo = new Date();
tempo.getTime(); //
// total de dias desde 1 de janeiro de 1970
const diasPassados = tempo.getTime() / (24 * 60 * 60 * 1000);



/*data futura / dias ate data */
const agora2 = new Date();
const promocao = new Date('December 24 2018 23:59');
function converterEmDias(time) {
 return time / (24 * 60 * 60 * 1000);
}
const diasAgora = converterEmDias(agora2);
const diasPromocao = converterEmDias(promocao);
const faltam = diasPromocao - diasAgora