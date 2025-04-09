import input from 'readline-sync';

let valor
let vencimento
let valor_total
let juros
let total_juros

console.log("Aplicação de juros\n\n");
valor = input.question("Informe o valor devido: R$");

if (valor !== "") {
  if (valor > 0) {
    vencimento = input.question("Informe quantos dias se passaram desde o dia do vencimentos: ");
    if (vencimento !== "") {
      if (vencimento > 0) {

        if (vencimento > 15) {
          juros = 10;
        }
        else {
          juros = 5;
        }
        valor = Number(valor);
        vencimento - Number(vencimento);

        total_juros = (valor / 100) * juros;
        valor_total = valor + total_juros;

        console.log("\nValor original da dívida: R$ " + valor);
        console.log("Dias atrasados: " + vencimento);
        console.log("Taxa de Juros: " + juros + "%");
        console.log("Valor total com juros: R$ " + valor_total);

      }
      else {
        console.log("Você está em dia!")
      }
    }
    else {
      console.log("O Valor do vencimento deve ser maior que zero!\n");
    }
  }
  else {
    console.log("O valor do vencimento deve ser maior que zero!\n");
  }
}
else {
  console.log("O valor da divida não pode ser vazio!\n");
}