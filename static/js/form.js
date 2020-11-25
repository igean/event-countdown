const inputs = document.querySelectorAll('.input')


inputs.forEach(e => {
    e.children[1].addEventListener('focus', () => {
        e.children[0].style.transform = 'translateY(-80%)'
    })
});