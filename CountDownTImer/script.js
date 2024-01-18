
const daysDiv=document.getElementsByClassName('days-count')[0];
const hoursDiv=document.getElementsByClassName('hours-count')[0];
const minutesDiv=document.getElementsByClassName('minutes-count')[0];
const secondsDiv=document.getElementsByClassName('seconds-count')[0];

const countDown=()=>{
    const birthdayDate= new Date('27 Aug 2024');
    let currentDate=new Date();

    let timeLeft=birthdayDate-currentDate;

    let seconds=Math.floor(timeLeft/1000);
    let days=Math.floor(seconds/3600/24);
    let hours=Math.floor(seconds/3600)%24;
    let minutes=Math.floor(seconds/3600)%60;
    seconds=Math.floor(seconds)%60;
    
    daysDiv.textContent=days;
    hoursDiv.textContent=hours;
    minutesDiv.textContent=minutes;
    secondsDiv.textContent=seconds;

}

setInterval(countDown,1000);
