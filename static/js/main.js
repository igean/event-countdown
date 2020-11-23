const darkmode = document.querySelector('.dark-mode')

const darkmode_switch = document.querySelector('.dark-mode-switch')
const sun = document.querySelector('.dark-mode img[alt="sun"]')
const moon = document.querySelector('.dark-mode img[alt="moon"]')

darkmode.addEventListener('click', () => {

    console.log(darkmode_switch.style.transform == 'translateX(-50%)')
})