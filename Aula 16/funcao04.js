function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) { //enquanto c for maior que 1 ele vai perder 1
        fat *=c
    } 
    return fat
}

console.log(fatorial(10))