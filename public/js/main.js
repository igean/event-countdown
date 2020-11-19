const card = document.querySelector('.event-item');
const menu = document.querySelector('.menu')
const bars = document.querySelector('.bars')



if (window.matchMedia('(max-width:500px)').matches) {

    card.addEventListener('click', () => {
        menu.style.transform = "translateX(-100%)"
    })
        
    bars.addEventListener('click', () => {
        if (menu.style.transform == "translateX(-100%)") {
            menu.style.transform = "translateX(0)"
        }
    })
}