let n = []
let dados = document.createElement('div') //criou uma nova div
let num = document.getElementById('txtn')
function gravar() {
    
    let tab = document.getElementById('tab')
    

    dados.innerHTML = ''
    
    if (num.value.length == 0){
        window.alert('Digite um número')
    
    } else{
        let valor = Number(num.value)
        if (n.includes(valor)){ //se o que foi digitado dentro de num já estiver em n recebe o erro
            window.alert('O valor já está na lista');
        
        } else if (valor > 100){
            window.alert('O valor não pode ser maior do que 100')
        }      
        else {
        n.push(Number(num.value)) //adiciona um novo campo em n
        let item = document.createElement('option') //cria um novo option
        item.text = `Valor ${n[n.length-1]} adicionado.` //exibe o novo option
        tab.appendChild(item) //define como filho de tab
        num.value = ''
        num.focus()
        
        }   
    }
    
}

function finalizar (){ //ao clicar no botão finalizar

    if (num.value.length == 0){ //Se clicar no botão finalizar e não conter valores mostra o erro
        window.alert('Adicione valores antes de finalizar')
    } else{
         let maior = Math.max(...n) // pega o maior numero da array
        let menor = Math.min(...n) //pega o menor numero da array
        let soma = 0
        for (let i = 0; i < n.length; i++) {// i foi dedfinido como 0 enquanto i for menor que o n ele vai somar mais 1, assim chegaremos na soma de todos os numeros
        soma += n[i];
        }
        let media = soma / n.length; //dividindo a soma com a quantidade de valores obtemos a media
        dados.innerHTML = `<br>Você adicionou ${n.length} números <br><br> O maior número foi ${maior} <br><br> 
        O menor número foi ${menor}<br><br> A soma de todos os números é: ${soma} <br> <br>
        A média de todos os número é ${media}`
    
    let section = document.querySelector('section') //chama a section
    section.appendChild(dados) //define os dados como filho da section
    }
   


}