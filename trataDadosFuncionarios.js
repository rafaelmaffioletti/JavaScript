import { funcionarios } from "./dados.js";
import { filtraFuncionariosIdade, retornaNomesFuncionarios, imprimeNomesFuncionarios } from "./functions.js";

let funcionariosIdade = filtraFuncionariosIdade(funcionarios);
let nomeFuncionarios = retornaNomesFuncionarios(funcionariosIdade);
imprimeNomesFuncionarios(nomeFuncionarios);

