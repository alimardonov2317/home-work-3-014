const timeCl = document.querySelector("#time");
const dayEl = document.querySelector("#day");
const monthEl = document.querySelector("#month");
const yearEl = document.querySelector("#year");

function getTime() {
    let date = new Date();

    let hour = date.getHours().toString().padStart(2, '0');
    let minute = date.getMinutes().toString().padStart(2, '0');
    let second = date.getSeconds().toString().padStart(2, '0');
    let timeView = `${hour}:${minute}:${second}`;

    const day = date.getDate().toString().padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    timeCl.innerHTML = timeView;
    dayEl.textContent = day;
    monthEl.textContent = month;
    yearEl.textContent = year;
}

getTime();
setInterval(getTime, 1000);
