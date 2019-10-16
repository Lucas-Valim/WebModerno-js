// criar uma function de forma literal

function func1(){

}

// Armazernar esta função em uma váriavel 

const func2 = function(){

}

// Aramazenar em um array

const array = [function(a, b) { return a + b}, func1, func2]

// Armazenar em um objeto

const obj = {}
obj.falar = function() {return 'Opa'}

console.log(obj.falar())

// Passar função como parametro

function run(fun){
    fun()
}

run(function () {console.log('Executando..')})

// Uma função pode retornar/ cpnter uma função

function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(5, 5)(5)
