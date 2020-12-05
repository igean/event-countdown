function start_countdown() {
    var title = document.querySelector('#title').value

    let day = document.querySelector('#date').value.split('-')
    day = day[2] + '/' + day[1] + '/' + day[0]

    var hour = document.querySelector('#time').value
    var description = document.querySelector('#description').value

    const container = document.querySelector('main')

    container.innerHTML = `
        <h1>${title}</h1>
        <h2>${day}</h2>
        <h2>${hour}</h2>
        <p>${description}</p>
    `
}