function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')

    const logo = document.createElement('img')
    logo.classList.add('logo')
    logo.src = './header-logo_imp_int.png'

    const signIn = document.createElement('button')
    signIn.classList.add('signIn')
    signIn.textContent = 'Vpiši me'

    header.appendChild(logo)
    header.appendChild(signIn)
    return header
}
function loadHeader(){
    const main = document.getElementById('main')

    main.appendChild(createHeader())
}
export default loadHeader
