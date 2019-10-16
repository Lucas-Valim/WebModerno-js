const calculator = function(operacao, value1, value2){
    if(operacao == '+'){
        const resultado = value1 + value2;
        console.log(resultado)
        return resultado;
    }else if(operacao == '-'){
        const resultado1 = value1 - value2;
        console.log(resultado1)
        return resultado1;
    } else if(operacao == '/'){
        const resultado2 = value1/value2;
        console.log(resultado2)
        return resultado2;
    } else if(operacao == '*'){
        const resultado3 = value1*value2;
        console.log(resultado3)
        return resultado3;
    }
}

calculator('/', 49, 7)