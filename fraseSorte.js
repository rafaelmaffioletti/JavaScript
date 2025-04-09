import input from 'readline-sync';

let aniversario;
let mensagens = [
  "A vida trará coisas boas se você tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Acredite em você mesmo e o universo conspirará a seu favor.",
  "Seja a mudança que você deseja ver no mundo.",
  "O sucesso não é acidental, é resultado de esforço e dedicação.",
  "Aprenda com o passado, viva o presente e sonhe com o futuro.",
  "Sua criatividade é ilimitada, explore novos horizontes.",
  "A jornada de mil quilômetros começa com um único passo.",
  "A sorte favorece a mente preparada.",
  "Seja corajoso, mesmo quando estiver com medo.",
  "A amizade é o maior tesouro da vida.",
  "A compaixão é a linguagem universal do coração.",
  "Sorria, a felicidade é contagiante.",
  "A cada desafio, surge uma oportunidade de crescimento.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "A persistência é o caminho do êxito.",
  "A compaixão é a linguagem universal do coração.",
  "Seja grato pelo que tem, e mais virá até você.",
  "Suas escolhas moldam seu destino, escolha sabiamente.",
  "Cada novo dia é uma página em branco, escreva uma boa história.",
  "O amor é a força mais poderosa do universo.",
  "A melhor maneira de prever o futuro é criá - lo.",
  "Seja gentil com cada pessoa que você encontrar.",
  "A verdadeira beleza está na simplicidade.",
  "O conhecimento é poder, compartilhe - o com o mundo.",
  "A gratidão transforma o que temos em suficiente.",
  "A cada desafio, surge uma oportunidade de crescimento.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia."
];

console.log("------------FRASE DA SORTE DE ANIVERSÁRIO------------\n");
console.log("SEJA BEM-VINDO!! LEIA A SORTE DO SEU ANIVERSARIO\n");

aniversario = input.question("Informe o dia do seu aniversaio: ");

if (aniversario >= 1 && aniversario <= 31) {
  console.log("\nSua Sorte: " + mensagens[aniversario - 1]);
}
else {
  console.log("Dia inválido!");
}