let dataHoje = new Date();
let dataNatal = new Date('2025-12-25T00:00');

let timeHoje = dataHoje.getTime();
let timeNatal = dataNatal.getTime();

let tempoFalta = timeNatal - timeHoje;

let segundos = tempoFalta / 1000;
let minutos = segundos / 60;
let horas = minutos / 60;


if (horas > 1) {
  console.log(`Faltam ${horas} Horas para o natal`);
} else {
  console(`Falta ${horas} hora para o Natal`);
}
