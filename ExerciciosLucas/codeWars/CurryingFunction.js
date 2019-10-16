
// let array = []
// const multiplyAll = function(array){
//     return function(mult){
//         const multplicando = e => e * mult 
//         result = array.map(multplicando)
//         return console.log(result)
//     }
// }

// multiplyAll([1,2,3])(2)

// let array = [];
// const multiplyAll = array =>
//     mult => {
//         const multplicando = e => e * mult;
//         result = array.map(multplicando)
//         return console.log(result)
//     }

// multiplyAll([1,2,3])(0)

// My soluction 
let array = [];
const multiplyAll = array =>
    mult => {
        const multplicando = e => e * mult;
        return array.map(multplicando)
    }
multiplyAll([1,2,3])(0)

// Best Practice 

const multiplyAll = arr => n => arr.map(x => n * x);

