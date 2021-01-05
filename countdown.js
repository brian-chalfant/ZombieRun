const dateheader = document.querySelector('#dd');
let now = new Date()
let current_date = (now.getMonth() + 1) + "/" + (now.getDate()) + "/" + now.getFullYear()
let current_time = now.toLocaleTimeString()
// Calculate days until Christmas of current Year.
let days = parseInt(Math.ceil(((new Date(now.getFullYear(), 9, 31).getTime() - now.getTime()) / (1000 * 3600 * 24)))).toString();

dateheader.innerHTML = `Race Starts on Sunday October 31st 2021: ${days} day(s) to Race Day`