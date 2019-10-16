//  Estratégia para gerar um valor padrão

function soma(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c;
}

console.log(soma())

// estrategia 2, 3 e 4 para gerar valor aleatorio 

function soma2(a, b, c){
    a = a !==undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
    }

    console.log(soma2())

    // valor padrão do ES2015
    
    function soma3(a = 1, b = 1, c = 1){
        return a + b + c;
    }

    console.log(soma3())

    