function abbrevName(name){
    const p = name.split(' ')[0].substr(0, 1).toUpperCase()
    const s = name.split(' ')[1].substr(0, 1).toUpperCase()
    return(console.log(`${p}.${s}`))
}

abbrevName('lucas borges')