function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Formatar com dois dígitos
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Atualizar o conteúdo do div com id "time"
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);

// Chamar a função uma vez para evitar o atraso inicial de um segundo
updateClock();
