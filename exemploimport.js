//Para importar, usamos o comando:
// e para funcionar, é necessário que o caminho do arquivo tenha a extensão .js
import { exercicio1 } from "./moduloExercicio1.js";

exercicio1()


//importando com prompt-sync, na hora de declarar o import, o "p" do prompt, precisa ser minusculo
import promptSync from "prompt-sync";
let prompt = promptSync();

prompt("Digite alguma coisa: ")


// Exercicio: Digite o numero do exercicio que você quer exibir, se quiser sair digite sair
// usar o do while e dentro usar um switch case