//  Uma Factory retorna um novo objeto 
module.exports = () => {
    return {
        valor:1,
        cont(){
            this.valor++
        }
    }
}