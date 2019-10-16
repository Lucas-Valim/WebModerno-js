const nums = [1, 2, 3, 4, 5]

//  for com propósito

let result = nums.map(function(e){
    return e * 2;

})
// console.log(nums)
// console.log(result)

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = nums.map(soma10).map(triplo).map(paraReal)
console.log(result)
