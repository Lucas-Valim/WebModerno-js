function MeuObjeto(){}
console.log(MeuObjeto.prototype)
const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function() {
    console.log(`Olá! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael';

obj2.falar()

const obj3 = {}
obj3.__proto__= MeuObjeto.prototype

obj3.nome = 'Teste'
obj3.falar()
