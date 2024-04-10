//dom


const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const btn = document.querySelector('.btn-call')
const resultado = document.querySelector('.resultado')


//eventos


btn.addEventListener('click',()=>{

    d= Number(distancia.value)
    c= Number(consumo.value)
    p= Number(preco.value)

    valor = (d / c)* p

    

    resultado.innerHTML = `O valor da Viagem é R$ ${valor}`
   

})

