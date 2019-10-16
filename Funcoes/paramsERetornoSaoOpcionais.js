function area(largura, altura){
    const area = largura * altura;
        if(area>20){
            console.log(`A área ${area}, não é válida.`)
        } else {
            return area;
        }
}
console.log(area(5,4))


function soma(){
    let soma=0
    for(i in arguments){
        soma += arguments[i]; 
        console.log(arguments[i])   
    }
    return soma
}

console.log(soma(1.1, 2.2, 3.3))

