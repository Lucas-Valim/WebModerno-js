
// function expressionsMatter(a, b, c) {
//     const results = [];
//     results.push(a * (b + c));

//     const one = a * (b + c);
//     const two = a * b * c;
//     const three = a + b * c;
//     const four = (a + b) * c;

//     if (one > two && one > three && one > four) {
//         // return one;
//         const result1 = console.log(one)
//         return result1;
//     } else if (two > one && two > three && two > four) {
//         // return two;
//         const result2 = console.log(two)
//         return result2;
//     } else if (three > one && three > two && three > four) {
//         // return three;
//         const result3 = console.log(three)
//         return result3;
//     } else {// return four
//         const result4 = console.log(four)
//         return result4;
//     }
// }

function expressionsMatter(a, b, c) {
 
    const results = [];
    results.push(a * (b + c));
    results.push(a * b * c);
    results.push(a + b * c);
    results.push((a + b) * c);
    results.push(a + b + c);

    const max = Math.max(...results)
    return console.log(max)
}

expressionsMatter(1, 1, 1)

