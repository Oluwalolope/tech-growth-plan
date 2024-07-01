// Get Output fields
const displayTime = document.querySelector('#utc-time');
const displayDay = document.querySelector('#day-of-week');

// Get current time
let now = new Date();
let currentDay = now.toDateString();
let currentTime = now.toTimeString();

displayTime.textContent = currentTime;
displayDay.textContent = currentDay;
