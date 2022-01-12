const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const second = document.getElementById('seconds');
function countDown(){
    const newYearDate = new Date('1 Jan 2023')
const date = new Date();
const millisecondsLeft = (newYearDate-date);
const daysLeft = Math.floor(millisecondsLeft/1000/3600/24);
const hoursLeft = Math.floor(millisecondsLeft/1000/3600)%24;

const minutesLeft = Math.floor(millisecondsLeft/1000/60)%60;
const seconds = Math.floor(millisecondsLeft/1000)%60;
console.log(daysLeft,hoursLeft,minutesLeft,seconds);
days.innerHTML = daysLeft;
hours.innerHTML = hoursLeft;
minutes.innerHTML = minutesLeft;
second.innerHTML = seconds;

}
countDown();
setInterval(countDown,1000);