const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.contador();
contadorA.contador();

console.log(contadorA.valor, contadorB.valor)

contadorC.cont();
contadorC.cont();

// console.log(contadorD.valor)
console.log(contadorC.valor, contadorD.valor)




