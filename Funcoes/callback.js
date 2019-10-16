const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

 let notasBaixas1 = [];
//  Método for in
// for(i in notas){
//     if(notas[i] <=7){
//         notasBaixas.push(notas[i])
//     }
// }

// Método forEach
notas.forEach((nota) => {
    if(nota <=7){
        notasBaixas1.push(nota);
    }
});
console.log(notasBaixas1)

// Método map
notasBaixas1 = notas.map((nota) => {
    if(nota <=7){
        return nota;
    }
});

console.log(notasBaixas1)


// Com callback

notasBaixas2 = notas.filter(function(nota){
    return nota <= 7;
})

console.log(notasBaixas2)

// Arrow funtcion
notasBaixas3 = notas.filter(nota => nota <= 7)

console.log(notasBaixas3)

console.log('-------------------------')


let notas2 = [7.8, 9.5, 6.4, 4.3, 7.0, 3.9];

notasBaixas4 = notas2.filter(function(nota){
    return nota <= 7;
})
console.log(notasBaixas4)

notasBaixas5 = notas2.filter(nota => nota <= 7);
console.log(notasBaixas5)




