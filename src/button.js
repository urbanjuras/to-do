const button = document.createElement('button')
const modal = document.getElementById('myModal')
const close = document.getElementsByClassName('close')[0]

function createButton(){
    const banner = document.createElement('div')
    const title = document.createElement('div')
    title.textContent = 'Vsa opravila'
    banner.classList.add('banner')
    button.classList.add('add')
    button.setAttribute('id','openModal')
    title.classList.add('title')
    button.textContent = '+ Dodaj novo opravilo'

    banner.appendChild(title)
    banner.appendChild(button)

    return banner
}
function loadButton(){
    const main = document.getElementById('main')
    main.appendChild(createButton())
}

button.addEventListener('click', (e) => {
    modal.style.display = 'block'
})
close.addEventListener('click', (e) => {
    modal.style.display = 'none'
})
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
})
export default loadButton