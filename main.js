const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const hourCh = (hour / 24) * 360;
    const minuteCh = (minute / 60)* 360;
    const secondCh = (second / 60)* 360;
    hourEl.style.transform = `rotate(${hourCh}deg)`;
    minuteEl.style.transform = `rotate(${minuteCh}deg)`;
    secondEl.style.transform = `rotate(${secondCh}deg)`;
    setInterval(() => {
        updateClock()
    }, 1000)


}
updateClock()