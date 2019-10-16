const soma = function (a, b){
    return a + b;
}

const imprimirResultado = function (a , b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, function(x, y) {
    return x - y
})

