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


// COUNTDOWN

// activate clicked card so it get the date and hour
function test (e) {
    const card_active = document.querySelectorAll('.card-active')

    for (card of card_active) {
        card.classList.remove('card-active')
    }
    e.classList.add('card-active')


    const d = document.querySelector('.card-active .d').innerText
    const m = document.querySelector('.card-active .m').innerText
    const y = document.querySelector('.card-active .y').innerText
    const h = document.querySelector('.card-active p~p').innerText

    countdown(d,m,y,h)
}


// COUNTDOWN FUNCTION
function countdown(d,m,y,h) {
    const countdown = document.querySelector('.countdown-time p')
    var target_date = new Date(`${y}-${m}-${d} ${h}:00`)
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


        if (days == 0 & hours == 0 & min < 1 & sec < 1) {
            countdown.innerText = "O evento começa agora"
        }else if (hours < 0 | min < 0) {
            countdown.innerText = "O evento já passou"
        }else {
            countdown.innerText = days+'d:'+hours+'h:'+min+'m:'+sec+'s'
        }

    }, 1000)
}
