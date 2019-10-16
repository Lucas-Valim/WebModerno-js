const valor = "Global";

function myfunction(){
    console.log(valor)

}

function exec(){
    const valor = "Local"
    myfunction()
}

exec()
