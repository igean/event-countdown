if (window.localStorage.getItem('darkmode')) {
    darkmode()
}

const nswitch = document.querySelector('#dark-switch')

nswitch.addEventListener('click', () => {
    darkmode()
})


function darkmode() {
    [
        document.querySelector('.container'),
        document.querySelector('h1'),
        document.querySelector('h2')
    ]

        .forEach(e => {
         e.classList.toggle('dark-mode')
    })

    document.querySelectorAll('p').forEach(e => {
        e.classList.toggle('dark-mode')
    })

    if (document.querySelector('.container').classList.toString().includes('dark-mode')) {
        nswitch.children[0].src = 'images/sun.svg'
        window.localStorage.setItem('darkmode', '')
    } else {
        nswitch.children[0].src = 'images/moon.svg'
        window.localStorage.removeItem('darkmode')
    }
}