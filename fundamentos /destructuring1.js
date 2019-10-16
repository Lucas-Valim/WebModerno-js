// novo recurso do ES2015 

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    } 
}

// destructuring de pessoa
const {nome, idade} = pessoa;
console.log(nome, idade)

// destructuring de pessoa e mudando o nome das variaveis
const {nome: n, idade: i} = pessoa;
console.log(n, i)
console.log('---------------------')
// destructuring com array

const [a] = [10];
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];

console.log(n1, n3, n5, n6)



