//Para repetir uma função você precisa "linkar" através do modulo package.json do node.js
// No package.json, precisamos colocar esse comando:
//{
//     "type": "module",
//     "dependencies": {
//       "prompt-sync": "^4.2.0"
//     }
//   }
// Com isso, você faz com que sua pasta inteira vire modulos, permitindo que você crie bibliotecas

//Para exportar, usamos o export 

//1. Imprimir números de 1 a 10 utilizando o loop for
export function exercicio1(){

    console.log("Exercicio 1 - FOR")

    for(let numeros = 1; numeros <= 10; numeros ++) {
    console.log (numeros);
    }


}


