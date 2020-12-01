const inputs = document.querySelectorAll('.input')
const container = document.querySelector('.container')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {

    const pass1 = inputs[2].children[1].value
    const pass2 = inputs[3].children[1].value
    
    if (pass2 !== pass1) {
        document.querySelector('#pass_auth').innerText = 'As senhas não coincidem'
        e.preventDefault()
    }
})

inputs.forEach(e => {
    e.children[1].addEventListener('input', () => {
        if (e.children[1].value.length > 0) {
            e.children[0].style.transform = 'translateY(-80%)'
        }
    })

})

container.addEventListener('click', () => {
    inputs.forEach(e => {
        if (e.children[1].value.length  < 1) {
            e.children[0].style.transform = 'translateY(0)'
        }
    })
})