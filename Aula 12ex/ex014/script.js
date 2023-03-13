function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var m = new Date ()
    var min = m.getMinutes()   
    const data = new Date()
    const day = String(data.getDate()).padStart(2,'0')
    const month = String(data.getMonth()+1).padStart(2,'0')
    const year = String(data.getFullYear())
   // var hora = data.getHours()
   var hora = 15
    msg.innerHTML = `${day}/${month}/${year}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${hora}:${min}`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = "manha.jpg"
        document.body.style.background = '#ffec9e'
        document.getElementById ('title').style.color = '#244c6c'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = "tarde.jpg"
        document.body.style.background = '#d26b48'
    } else {
        //boa noite
        img.src = "noite.jpg"
        document.body.style.background = '#1a1f33'
    }
}


