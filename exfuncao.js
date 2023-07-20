let prompt = require("prompt-sync")()
//Variaveis
let nome_recebido = prompt("Digite seu nome: ")

let idade_recebida = parseInt(prompt("Digite sua idade: "))
//Objeto

// let pessoa = {
//     nome: nome_recebido,
//     idade: idade_recebida
// }

// console.log("Hello " + pessoa.nome + "!  Você está com " + pessoa.idade + " anos")

// ou
// let pessoa = {
//     nome: prompt("Digite seu nome: "),
//     idade: parseInt(prompt("Digite sua idade: "))
// }
// console.log("Hello " + nome + "Você está com " + idade + " anos")

//Função
function olaPessoa() {
    let pessoa = {
        nome: nome_recebido,
        idade: idade_recebida,
    }
    
    console.log("Hello " + pessoa.nome + "!  Você está com " + pessoa.idade + " anos")
}

olaPessoa()

