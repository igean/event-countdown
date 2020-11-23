const darkmode = document.querySelector('#dark-switch')

darkmode.addEventListener('click', () => {

    document.querySelector('.container').classList.toggle('dark-mode')
    document.querySelector('.container main h2').classList.toggle('dark-mode')

    for (p of document.querySelectorAll('p')) {
        p.classList.toggle('dark-mode')
    }
})