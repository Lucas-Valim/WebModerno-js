// middleware pattern (chain of responsibility)

const passo1 = (contx, next) => {
    contx.valor1 = 'mid1';
    next()


}

const passo2 = (contx, next) => {
    contx.valor2 = 'mid2';
    next()
}

const passo3 = contx => contx.valor3 = 'mid3';


const exec = (contx, ...middlewras) => {
    const execPasso = indice =>{
        middlewras && indice < middlewras.length && 
            middlewras[indice](contx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contx = {};
exec(contx, passo2, passo1, passo3)
console.log(contx)


