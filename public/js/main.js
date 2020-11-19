const card = document.querySelector('.event-item');
const menu = document.querySelector('.menu')

card.addEventListener('click', () => {
    card.style.border = "2px groove blue"
    menu.style.transform = "translateX(-100%)"
})