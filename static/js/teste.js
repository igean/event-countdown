function start_countdown() {
  var title = document.querySelector("#title").value;
  var description = document.querySelector("#description").value;

  let day_i = document.querySelector("#date").value.split("-");
  var hour = document.querySelector("#time").value.split(":");

  day = new Date(day_i[0], day_i[1] - 1, day_i[2], hour[0], hour[1]);

  const m = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  setInterval(() => {
    // counter
    const now = new Date();
    var time = (day - now) / 1000;
    const days = parseInt(time / 86400);

    time = time % 84600;
    const hour = parseInt(time / 3600);

    time = time % 3600;
    const min = parseInt(time / 60);

    const sec = parseInt(time % 60);

    const container = document.querySelector("main");

    container.innerHTML = `
            <h1>${title}</h1>
            <strong>${days}d : ${hour}h : ${min}min : ${sec}s para o dia ${
      day_i[2]
    } de ${m[day_i[1] - 1]} de ${day_i[0]}</strong>
            <p>${description}</p>
        `;
  }, 1000);
}