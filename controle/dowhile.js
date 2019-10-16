function getInterioAleatorio(min, max){
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

let opcao = 0;

do {
    opcao = getInterioAleatorio(-1,10)
    console.log(`O valor gerado foi ${opcao}.`)
} while(opcao != -1)

