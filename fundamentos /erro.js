function tratarErroELancar(erro) {
    //throw new Error ('...')
    //throw 10
    throw {
        name: erro.nome,
        mensagem: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
   
}

const obj = { nome: 'Roberto'};
imprimirNomeGritando(obj);

