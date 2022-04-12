

let mais= document.querySelector('#mais')
let menos= document.querySelector('#menos')
let number= document.querySelector('#number')
let limpar= document.querySelector('#limpar')

let numero= 0

mais.addEventListener('click', function(){
    numero += 1
    number.textContent = numero
})

menos.addEventListener('click' , function(){
    numero -= 1
    number.textContent = numero
})


limpar.addEventListener('click', function(){
    numero= 0
    number.textContent = numero
})