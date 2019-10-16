const carro = {
    velAtual: 0,
    velMax: 200,

    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax){
        return  this.velAtual += delta
    } else {
        this.velAtual = this.velMax
        console.log("Voce passou da velocidade limite!")
    }
},
    status(){
    return `Sua velocidade é ${this.velAtual}Km/h de ${this.velMax}Km/h.`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 354
}

Object.setPrototypeOf(ferrari, carro)

ferrari.aceleraMais(355)
console.log(ferrari.status())
