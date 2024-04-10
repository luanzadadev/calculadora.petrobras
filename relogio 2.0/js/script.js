//dom

const Horas =document.querySelector('#Horas')
const Minutos =document.querySelector('#Minutos')
const Segundos =document.querySelector('#Segundos')

const diy =document.querySelector('#dia')
const mes =document.querySelector('#mes')
const ano =document.querySelector('#ano')
const texto =document.querySelector('#texto')
//Eventos
setInterval(relogio,1000)

//função

function relogio() {
    
    let dia = new Date()

    let h = dia.getHours() 
    let m = dia.getMinutes() 
    let s = dia.getSeconds() 

    let dd= dia.getDate()
    let mm= dia.getMonth()+1
    let aa= dia.getFullYear()
  
      
    Horas.textContent = h
    Minutos.textContent = m
    Segundos.textContent = s

    if(s <= 10){
        Segundos.textContent= "0"+s
    }
    if(m <= 10){
        mes.textContent= "0"+m
    }

    diy.textContent= dd+""
    mes.textContent= mm
    ano.textContent=aa

    if(mm <= 10){
        mes.textContent= "0"+mm
    }
 
    if (h<10) {
        h="0" + h
    }

    if (m<10) {
        m="0" + m
    }
    if (s<10) {
        s="0" + s
    }

    if (h>=5 && h<= 12) {
    texto.textContent= 'Bom dia '
    } else if (h>=13 && h<= 17) {
        texto.textContent= 'Boa tuarde '
    } else {
        texto.textContent= 'Boa nuate '
    }
    



}