let label_aluno = "Aluno";
let valor_aluno = "Rafael Maffioletti";
let label_grau = "Grau de escolaridade";
let valor_grau = "Ensino Superior Completo";

console.log("\nInformações Cadastrais\n");
console.log(label_aluno.padStart(21, ".") + ": " + valor_aluno);
console.log(label_grau.padStart(21, ".") + ": " + valor_grau + "\n");

let label_nome = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log(label_nome.padEnd(25, '.') + valor_nome);
console.log(label_profissao.padEnd(25, '.') + valor_profissao);
console.log(label_endereco.padEnd(25, '.') + valor_endereco);


/*
Ao utilizar o substring(), o recomendado é sempre trabalhar com os valores referentes a posição inicial e posição final da string que será extraída.
*/

console.log("\nUtilizando substring\n")
let frase = "Ana é especialista em JavaScript";
let resultado = frase.substring(6, 18);

console.log(resultado + "\n");


/* EXEMPLO PRATICO */

const chuvas_meteoros = [
  { nome: "Alfa Centaurídeos", pico: "Fev 8", velocidade: "56 km/s" },
  { nome: "Gama Normídeos", pico: "Mar 14", velocidade: "56 km/s" },
  { nome: "Pi Pupídeos", pico: "Abr 23", velocidade: "18 km/s" },
  { nome: "Eta Aquáridas", pico: "Mai 5", velocidade: "66 km/s" },
  { nome: "Alfa Capricornídeos", pico: "Jul 30", velocidade: "23 km/s" },
  { nome: "Delta Aquáridas do Sul", pico: "Jul 28", velocidade: "41 km/s" },
  { nome: "Piscis Austrinídeos", pico: "Jul 28", velocidade: "35 km/s" },
  { nome: "Fenícidas", pico: "Dez 6", velocidade: "18 km/s" },
  { nome: "Pupidas-Velidas", pico: "Dez 12", velocidade: "40 km/s" }
];

let titulo = "=== chuvas de meteoros - hemisfério sul ===";
console.log(titulo.toUpperCase());
console.log("\n");

for (const chuva of chuvas_meteoros) {

  let nome_chuva = chuva.nome;
  let pico_chuva = chuva.pico;
  let velocidade_chuva = chuva.velocidade;

  let pico_mes_dia = pico_chuva.split(" ");

  let pico_dia = pico_mes_dia[1];
  let pico_mes = pico_mes_dia[0];

  let pico_mes_nome = "";

  switch (pico_mes) {

    case "Jan": pico_mes_nome = "Janeiro"; break;
    case "Fev": pico_mes_nome = "Fevereiro"; break;
    case "Mar": pico_mes_nome = "Março"; break;
    case "Abr": pico_mes_nome = "Abril"; break;
    case "Mai": pico_mes_nome = "Maio"; break;
    case "Jun": pico_mes_nome = "Junho"; break;
    case "Jul": pico_mes_nome = "Julho"; break;
    case "Ago": pico_mes_nome = "Agosto"; break;
    case "Set": pico_mes_nome = "Setembro"; break;
    case "Out": pico_mes_nome = "Outubro"; break;
    case "Nov": pico_mes_nome = "Novembro"; break;
    case "Dez": pico_mes_nome = "Dezembro"; break;

    default: pico_mes_nome = "Mês inválido"; break;

  }

  let pico_data_chuva_formatada = pico_dia + " de " + pico_mes_nome;

  let velocidade_formatada = velocidade_chuva.replace("km/s", "quilômetros por segundo");

  console.log("Nome: ".padEnd(30, ".") + nome_chuva);
  console.log("Pico: ".padEnd(30, ".") + pico_data_chuva_formatada);
  console.log("Velocidade: ".padEnd(30, ".") + velocidade_formatada);
  console.log("\n");

}

