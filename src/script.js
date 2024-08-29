function updateTime(){
            
    let time = new Date
    let currentHour = time.getHours()
    let currentMin = time.getMinutes()
    let currentSec = time.getSeconds()
    let formate = currentHour % 12 || 12
    let period = currentHour >= 12 ? 'PM' : 'AM'
    let formattedMin = currentMin < 10 ? '0' + currentMin : currentMin;
    let formattedSec = currentSec < 10 ? '0' + currentSec : currentSec;
    let body = document.querySelector('body')

    document.querySelector('.timeFormat').textContent = period
    document.querySelector('.hour').textContent = formate
    document.querySelector('.min').textContent = formattedMin
    document.querySelector('.sec').textContent = formattedSec

    if(currentHour >= 4 && currentHour < 18){
        body.classList.add('day')
        body.classList.remove('night')
    }else{
        body.classList.add('night')
        body.classList.remove('day')
    }


}

updateTime()

setInterval(updateTime, 1000)