function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) {
  let palavraOcultaArray = palavraOculta.split('')

  for (let i = 0; i < palavraEscolhida.length; i++) {
    if (letraDigitada === palavraEscolhida[i]) {
      palavraOcultaArray[i] = letraDigitada
    }
  }

  return palavraOcultaArray.join('');
}

function validarLetraDigitada(letraDigitada) {
  if (letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)) {
    return true
  } else {
    return false
  }
}

function verificarJogoGanho(palavraOculta, palavraEscolhida) {
  if (palavraOculta === palavraEscolhida) {
    return true
  } else {
    return false
  }
}

function verificarLetraPresenteNaPalavra(palavraEscolhida, letraDigitada) {
  if (palavraEscolhida.includes(letraDigitada)) {
    return true
  } else {
    return false
  }
}

function jogadasRestantes(erros) {
  return 4 - erros
}

function exibirMensagemFimDeJogo(statusJogo) {
  if (statusJogo === 'venceu') {
    console.log("\n--------------VOCÊ VENCEU!!-------------");
  } else {
    console.log("\n--------------VOCÊ PERDEU!!-------------");
  }
}

/* Filtrar funcionarios com mais de 30 anos */

function verificaFuncionariosIdade(funcionario) {
  return (funcionario.idade > 30)
}

function filtraFuncionariosIdade(funcionarios) {

  let funcionariosFiltro = funcionarios.filter(verificaFuncionariosIdade);
  return funcionariosFiltro;

}

function retornaNomesFuncionarios(funcionarios) {

  let nomes = funcionarios.map(funcionario => funcionario.nome);
  return nomes;
}

function imprimeNomesFuncionarios(arrayNomes) {
  arrayNomes.forEach(nome => {
    console.log(nome);
  });
}


export {
  validarLetraDigitada,
  verificarJogoGanho,
  verificarLetraPresenteNaPalavra,
  jogadasRestantes,
  atualizarPalavraOculta,
  exibirMensagemFimDeJogo,
  filtraFuncionariosIdade,
  retornaNomesFuncionarios,
  imprimeNomesFuncionarios
};