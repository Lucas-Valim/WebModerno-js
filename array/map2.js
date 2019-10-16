const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Carderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50}'
]

// uma forma
// let apenasPrecos = carrinho.map(function(valores){
//     let objeto = JSON.parse(valores)
//     let preco = objeto.preco;
//     return preco
// })
// console.log(apenasPrecos)

// outra forma 

const transformar = json => JSON.parse(json)
const apenasPreco = objeto => objeto.preco

const resultado = carrinho.map(transformar).map(apenasPreco)
console.log(resultado)


