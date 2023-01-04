function updateTime() {
    let divTime = document.querySelector('.container h1');

    let now = new Date();
    let horas = now.getHours();
    let minutos = now.getMinutes();
    horas = horas < 10 ? '0' : horas;
    minutos = minutos < 10 ? '0' : minutos;

    divTime.innerHTML = `${horas}:${minutos}`
}

function updateGreeting() {
    let divGreeting = document.querySelector('.container h3');

    let now = new Date();
    let horas = now.getHours();
    if (horas > 0 && horas < 12) {
        divGreeting.innerHTML = 'Bom dia, Fulano';
    } else if (horas >= 12 && horas < 18) {
        divGreeting.innerHTML = 'Boa tarde, Fulano';
    } else {
        divGreeting.innerHTML = 'Boa noite, Fulano'
    }
}

function updatePage() {
    updateTime();
    updateGreeting();
}

setInterval(updatePage, 1000);
updatePage();
