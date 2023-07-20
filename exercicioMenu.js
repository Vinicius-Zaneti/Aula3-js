//Fazer um menu de exercícios utilizando exemplos dado em aula 
//(6 exercícios dentro de funções, e incluir nome ou algo de sua preferência para criar um objeto e manipulá-lo)

import promptSync from "prompt-sync";
import { exercicio1 } from "./moduloExercicio1.js";
import { exercicio2 } from "./moduloExercicio2.js";
import { exercicio3 } from "./moduloExercicio3.js";
import { exercicio4 } from "./moduloExercicio4.js";
import { exercicio5 } from "./moduloExercicio5.js";
import { exercicio6 } from "./moduloExercicio6.js";
import { exercicio7 } from "./moduloExercicio7.js";
import { exercicio8 } from "./moduloExercicio8.js";
import { exercicio9 } from "./moduloExercicio9.js";
import { exercicio10 } from "./moduloExercicio10.js";

let prompt = promptSync();

let resposta;

do {
    console.log("Bem vindo ao menu de exercicios!")
    resposta = prompt("Digite um número de 1 à 10, para escolher um exercicio, ou 'sair' para interromper o programa: ")

    switch (resposta) {
        case "1":
            // Chamar o exercicio 1
            console.log ("Você escolheu o exercicio 1!")
            exercicio1()
        break;
        case "2":
             // Chamar o exercicio 2
             console.log ("Você escolheu o exercicio 2!")
             exercicio2()
        break;
        case "3":
            // Chamar o exercicio 3
            console.log ("Você escolheu o exercicio 3!")
            exercicio3()
        break;
        case "4":
            // Chamar o exercicio 4
            console.log ("Você escolheu o exercicio 4!")
            exercicio4()
        break;
        case "5":
            // Chamar o exercicio 5
            console.log ("Você escolheu o exercicio 5!")
            exercicio5()
        break;
        case "6":
            // Chamar o exercicio 6
            console.log ("Você escolheu o exercicio 6!")
            exercicio6()
        break;
        case "7":
            // Chamar o exercicio 7
            console.log ("Você escolheu o exercicio 7!")
            exercicio7()
        break;
        case "8":
            // Chamar o exercicio 8
            console.log ("Você escolheu o exercicio 8!")
            exercicio8()
        break;
        case "9":
            // Chamar o exercicio 9
            console.log ("Você escolheu o exercicio 9!")
            exercicio9()
        break;
        case "10":
            // Chamar o exercicio 10
            console.log ("Você escolheu o exercicio 10!")
            exercicio10()
        break;
        default:
            console.log("Você não escolheu nenhum exercicio")
            break;
    }
} while (resposta != "sair");