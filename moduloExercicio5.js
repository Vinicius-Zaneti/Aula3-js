//5. Imprimir os primeiros 10 números da sequência de Fibonacci.
export function exercicio5() {
    let numeroAnterior = 0;
    let numeroAtual = 1;
    
    console.log(numeroAnterior)
    console.log(numeroAtual)
    
    for (let contador = 3; contador <= 10; contador++){
        let proximoNumero = numeroAnterior + numeroAtual
    
        console.log(proximoNumero)
        numeroAnterior = numeroAtual
        numeroAtual = proximoNumero
    }
   }