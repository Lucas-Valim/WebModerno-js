// class Pessoa{
//     constructor(nome){
//         this.nome = nome
//     }
//     falar(){
//         console.log(`Meu nome é ${this.nome}.`)
//     }
// }
// const p1 = new Pessoa('João')
// p1.falar()

function criarPessoa(nome){
    this.nome = nome;

 this.falar = function(){
    console.log(`Nome é ${this.nome}`)

    }
}

const pessoa1 = new criarPessoa("Lucas");
pessoa1.falar()

