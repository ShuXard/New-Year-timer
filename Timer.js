const newYears = '1 Jan 2023'
const appendDays = document.getElementById('days')
const appendHours = document.getElementById('hours')
const appendMins = document.getElementById('mins')
const appendSeconds = document.getElementById('seconds')


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = new Date(newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const mins = Math.floor(totalSeconds / 60) % 60
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const seconds = Math.floor(totalSeconds) % 60
 
    appendDays.innerHTML = timeFormat(days)
    appendMins.innerHTML = timeFormat(mins)
    appendHours.innerHTML = timeFormat(hours)
    appendSeconds.innerHTML = timeFormat(seconds)

    function timeFormat(time) {
        return time < 10 ? ('0'+`${time}`) : time
    }
}

setInterval(countdown, 1000)