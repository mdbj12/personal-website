const newDiv = document.createElement('div')
const newP = document.createElement('p')
const newH1 = document.createElement('h1')
const newH2 = document.createElement('h2')

const btn1 = document.querySelector('.button1')
btn1.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = "../HTML/home.html"
})
const btn2 = document.querySelector('.button2')
btn2.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = "../HTML/about.html"
})