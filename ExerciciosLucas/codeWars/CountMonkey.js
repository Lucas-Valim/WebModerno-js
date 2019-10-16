function monkeyCount(n){
    let contador = 1;
    const monkeys = []
    for(let i = 1; i <= n; i++){
        monkeys.push(contador++)
    }
    return monkeys
}

monkeyCount(5)