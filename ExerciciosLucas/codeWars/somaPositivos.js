function somaPositivos(arr) {
    let soma = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            soma.push(arr[i])
        } else {

        }
    }
      return function total(...soma){
          let total = 0;
          let soma1 = 0;
          soma.forEach(n => soma1 += n)
          console.log(total)
          return total
        }

    // let total = 0;
    // for (let j = 0; j < soma.length; j++) {
    //     total += soma[j];
    // }
    // console.log(total);
    // return total;
}

somaPositivos([2, 9, -8])


