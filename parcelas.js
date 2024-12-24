import input from "readline-sync"

let valor = input.question("Qual o valor de sua parcela: R$");
let quantidade_parcela = input.question("Informe em quantas parcelas voce deseja: ")

for (let i = 1; i <= quantidade_parcela; i++) {

  let valor_parcela = valor / i;
  console.log("Parcela " + i + " no valor de: R$" + valor_parcela.toFixed(2));
}