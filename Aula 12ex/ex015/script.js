function verificar() {
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente. ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'menino.webp')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'rapaz.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        }else {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'moca.jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.webp')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}