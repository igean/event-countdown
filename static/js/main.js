const darkmode = document.querySelector('#dark-switch')

darkmode.addEventListener('click', () => {

    const container = document.querySelector('.container')
    container .classList.toggle('dark-mode')

    document.querySelector('.container main h2').classList.toggle('dark-mode')

    for (p of document.querySelectorAll('p')) {
        p.classList.toggle('dark-mode')
    }


    if (container.classList.toString().includes('dark-mode')) {
        darkmode.firstChild.src = 'images/sun.svg'

        window.localStorage.setItem('darkmode', 'dark-mode')
    }else {
        darkmode.firstChild.src = 'images/moon.svg'

        window.localStorage.removeItem('darkmode')
    }
})


// localStorage onload
if (window.localStorage.getItem('darkmode')) {
    document.querySelector('.container').classList.add('dark-mode')
    document.querySelector('.container main h2').classList.add('dark-mode')
    for (p of document.querySelectorAll('p')) {
        p.classList.add('dark-mode')
    }
    darkmode.firstChild.src = 'images/sun.svg'
}