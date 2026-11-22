
function updateClock() {
    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("liveClock").textContent = time;
}

updateClock();

setInterval(updateClock, 1000);
