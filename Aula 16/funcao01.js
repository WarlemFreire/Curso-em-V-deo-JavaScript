function parimp(n) {
    if (n%2 == 0) { //se o número for divisivel por 2 e não tiver resto retorne par, se não impar
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let res = parimp(4) // a variavel res recebe o resultado da função parimp que vai dizer se é par ou impar
console.log (`O número é ${res}`)