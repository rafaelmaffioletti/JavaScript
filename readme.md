# INFLAÇÃO.JS

A proposta desse projeto é criar um sistema que liste o salário mínimo e a inflação do IPCA entre 2010 e 2020. Além disso, a aplicação deve listar um comparativo do percentual de crescimento desses dois valores nesse mesmo período.

conceitos aplicados:

Variáveis
Operadores
Tipos de dados
Estruturas condicionais
Inputs
Arrays
Estruturas de repetição
Manipulação de strings

---

Requisitos:

O usuário da aplicação deve escolher uma dentre 3 opções:
1 - Listar o histórico do salário mínimo
2 - Listar o histórico da taxa IPCA (inflação)
3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)

Ao escolher a opção 1 a aplicação deve acessar e listar o histórico do salário mínimo entre 2010 e 2020. Os dados necessários devem estar no código da aplicação.
Ao escolher a opção 2 a aplicação deve acessar e listar o histórico da inflação entre 2010 e 2020. Os dados da inflação também devem estar no código da aplicação.
Ao escolher a opção 3 a aplicação deve listar o histórico de 2010 a 2020 do salário mínimo e da inflação. Além disso, na opção 3 deve ser calculado o percentual de crescimento do salário mínimo.

O percentual de crescimento é calculado com base na diferença entre o salário do ano e do ano anterior, dessa forma, o percentual de crescimento só deve ser apresentado a partir de 2011.

        Cálculo do percentual de crescimento:

diferenca = salarioAtual - SalarioAnterior;
crescimentoSalarial = (diferenca / salarioAnterior) \* 100;

Exemplo prático considerando que:

Salário de 2010 = R$ 510
Salário de 2011 = R$ 545

diferenca = 545 - 510;
crescimentoSalarial = (diferenca / 510) \* 100;
crescimentoSalarial = 6.86%;

O valor da inflação(IPCA) já é dado em porcentagem, portanto, não precisa ser calculado

Os dados devem ser formatados com o seguinte padrão:
Valores monetários devem ser precedidos por R$
Valores monetários devem ter 2 casas decimais, ainda que o valor dos decimais seja 0. Ex: R$ 599,00
Valores percentuais devem ter o símbolo % após os números
O separador decimal utilizado deve ser a vírgula (,) e não o ponto (.)

A aplicação deve exibir o resultado na tela e encerrar o processamento, sendo necessário executá-la novamente para escolher uma nova opção.

---

Regra de calculo de percentual de crescimento

álculo do percentual de crescimento:

diferenca = salarioAtual - SalarioAnterior;
crescimentoSalarial = (diferenca / salarioAnterior) \* 100;

Exemplo prático considerando que:

salário de 2010 = R$ 510
Salário de 2011 = R$ 545

diferenca = 545 - 510;
crescimentoSalarial = (diferenca / 510) \* 100;
crescimentoSalarial = 6.86%;

---

# CONTADOR.JS

Este projeto solita ao usuário o valor da prestão e em quantas vezes ele gostaria de parcelar. após informar a quantidade de parcelas o programa irá mostar a quantudade de parcelas e quanto que irá ficar.

# DATE.JS

Mostra como realizar as manupulações de datas.
