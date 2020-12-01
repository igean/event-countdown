const nswitch = document.querySelector('#dark-switch')

if (window.localStorage.getItem('darkmode')) {
    darkmode()
    nswitch.children[0].src = 'images/sun.svg'
}

nswitch.addEventListener('click', () => {
    darkmode()
})


function darkmode() {
    [
        document.querySelector('.container'),
        document.querySelector('h2')
    ]

        .forEach(e => {
         e.classList.toggle('dark-mode')
    })

    document.querySelectorAll('p').forEach(e => {
        e.classList.toggle('dark-mode')
    })

    document.querySelectorAll('input').forEach(e => {
        e.classList.toggle('dark')
    })

    if (document.querySelector('.container').classList.toString().includes('dark-mode')) {
        nswitch.children[0].src = 'images/sun.svg'
        window.localStorage.setItem('darkmode', 'dark')
    } else {
        nswitch.children[0].src = 'images/moon.svg'
        window.localStorage.removeItem('darkmode')
    }
}