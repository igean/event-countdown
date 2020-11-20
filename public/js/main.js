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



const countdown = document.querySelector('.countdown-time p')
var target_date = new Date('2020-12-23 14:30:00')
var days, hours, min, sec

setInterval(() => {

    var current_date = new Date()
    var sec_counter = (target_date - current_date)/1000

    days = parseInt(sec_counter/86400)
    sec_counter = sec_counter%86400

    hours = parseInt(sec_counter/3600)
    sec_counter = sec_counter%3600

    min = parseInt(sec_counter/60)
    sec = parseInt(sec_counter%60)

    countdown.innerText = days+'d:'+hours+'h:'+min+'m:'+sec+'s'

}, 1000)