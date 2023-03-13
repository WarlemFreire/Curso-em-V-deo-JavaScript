//VETORES SEMPRE COMEÇAM PELO 0
let num = [5,8,9,3,2]
num [5] = 6 //adiciona um valor (6) em uma posição determinada (5)
num.push(1)  //adiciona uma valor (7) para depois da última posição
num.sort() //ordena os valores do menor para o maior
console.log (`Nosso vetor é o ${num}`) //mostra todos os elementos da variavel
console.log (`Nosso vetor tem ${num.length} elementos`) //num.length mostra quantas posições tem na variavel
console.log (`O primeiro valor do vetor é ${num[0]}`) //mostra o valor que está dentro da posição(0)
console.log(`O valor 9 está na posição ${num.indexOf(9)}`) //Encontra em que posição está o valor
/*for (let pos=0;pos<num.length;pos++){ //enquanto pos for menor que o numero de posições ele vai aumentar
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) //forma formatada de mostrar
}*/ 

for (let pos in num ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) //Forma simplificada de formatar
}

