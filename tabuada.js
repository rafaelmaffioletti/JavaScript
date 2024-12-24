import input from 'readline-sync';

let numero
let contador = 0
let continuar

do {

  console.log("\n::::: Aplicação de Tabuada :::::");
  numero = input.question("\nDigite a tabuada que voce deseja de 1 a 999: ");
  console.log("");

  if (numero < 999) {

    contador = 0 /* reseta o contador para rodar uma outra vez*/

    while (contador <= 10) {

      let resultado = numero * contador;
      console.log(numero + " x " + contador + " = " + resultado);

      contador++;
    }

  } else
    console.log("\nDigitação incorreta, tente um numero de 1 a 999!")

  continuar = input.question("\nDeseja outra tabuada (S/N): ");

} while (continuar.toUpperCase() === "S"); 
