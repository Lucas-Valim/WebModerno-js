const obj1 = {}
obj1.nome = "Bola"
//obj1['nome']= 'Bola2' 
console.log(obj1.nome)

function Obj (name, age){
    this.nome=name;
    this.idade=age
}

const obj2 = new Obj('Cadeira', 20)
const obj3 = new Obj('Mesa')

console.log(obj2.nome, obj2.idade)
console.log(obj3.nome, obj3.age)

const objeto = {
    age: 20,
    nome: 'joao'
}

console.log(objeto)
console.log(objeto.nome)