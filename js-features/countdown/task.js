const numbTimer = document.getElementById("timer")
let numberStart = 59;
const timer = setInterval(() => {
    if(numberStart > 0) {
        numberStart--
        numbTimer.textContent = numberStart
    }else {
        alert("Вы победили в конкурсе!")
        clearTimeout(timer)
    }
}, 1000);
