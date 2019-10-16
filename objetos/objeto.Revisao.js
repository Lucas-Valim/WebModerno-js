//  usando a notação literal
const obj1 ={}

console.log(obj1)

//  Objeto em JS

const obj2 = new Object;
console.log(obj2)

// Função construtora 

function Produto(nome, preco, desco){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desco)
    }
}

const p1 = new Produto('Caneta', 45, 0.15)
console.log(p1.getPrecoComDesconto())

// Factory
function criarFuncionario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return Math.round((salario/ 30) * (30 - faltas)) 
       
        }
        
    }
}

const f1 = new criarFuncionario('João', 4000, 5)
console.log(f1.getSalario())

// Object.creat

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

