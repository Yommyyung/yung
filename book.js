const button = document.getElementById("click");

const para = document.getElementById("para");

const paras = document.getElementById("paras");

const par = document.getElementById("par");

const container = document.getElementById("container");

button.addEventListener('click', Event => {
    para.style.backgroundColor = 'red'
    paras.style.backgroundColor = 'yellow'
    par.style.backgroundColor = 'blue'
 })

button.addEventListener('click', Event => {
    para.innerText = `One`
    paras.innerText = `Two`
    par.innerText = `three`
})

button.addEventListener('click', Event => {
    para.style.transform = 'rotate(720deg)'
    paras.style.transform = 'rotate(720deg)'
    par.style.transform = 'rotate(720deg)'
})
button.addEventListener('click', Event => {
    para.style.transition = 'all  5s'
    paras.style.transition = 'all  5s'
    par.style.transition = 'all  5s'
    
})

