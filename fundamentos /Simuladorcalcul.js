// Primeiro método
function calcular(valor1, valor2, operacao) {
// 1 somar
// 2 subtrair
// 3 dividir
if (operacao === 1) {
return valor1 + valor2;
}
else if (operacao === 2) {
return valor1 - valor2;
}
else if (operacao === 3) {
return valor1 / valor2;
}
}

console.log('Dividir: ', calcular(4, 2, 3));
console.log('Somar: ', calcular(4, 2, 1));
console.log('Subtrair: ', calcular(4, 2, 2));

// Segundo método
function somar(valor1, valor2) {
return valor1 + valor2;
}

function dividir(valor1, valor2) {
return valor1 / valor2;
}

function subtrair(valor1, valor2) {
return valor1 - valor2;
}