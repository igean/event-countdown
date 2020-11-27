const inputs = document.querySelectorAll('.input')
const container = document.querySelector('.container')


inputs.forEach(e => {
    e.children[1].addEventListener('keydown', () => {
            e.children[0].style.transform = 'translateY(-80%)'
    })

});

container.addEventListener('click', () => {
    inputs.forEach(e => {
        if (e.children[1].value.length  < 1) {
            e.children[0].style.transform = 'translateY(0)'
        }
    })
})