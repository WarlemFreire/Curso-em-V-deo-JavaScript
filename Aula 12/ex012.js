var agora = new Date()
var hora = agora.getHours()
var m = new Date ()
var min = m.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${min} minutos`)
if (hora < 12 && hora >= 6){
    console.log('Bom Dia!')
} else if (hora <= 18 && hora > 12){
    console.log('Boa Tarde!')
} else if (hora > 18 && hora < 24){
    console.log('Boa Noite!')
} else if (hora < 6) {
    console.log('Boa Madrugada')
}