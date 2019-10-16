//definição da função calcular
function calcular(valor1, valor2, operacao){
    if (operacao=='Subtrair'){
       return valor1 - valor2;
    }
    else if (operacao=='Somar'){
        return valor1 + valor2;
    }
    else if (operacao=='Dividir'){
        return valor1 / valor2;
    }
}

//teste dos dados 
console.log(calcular(4,6,'Somar'))
console.log(calcular(4,6,'Subtrair'))
console.log(calcular(4,6,'Dividir'))

