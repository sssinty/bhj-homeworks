const getHole = index => document.getElementById(`hole${index}`);
const deadMoles = document.getElementById("dead");
const lostMoles = document.getElementById("lost");
let counterDeadMols = 0;
let counterLostMols = 0;
for(holeIndex = 1; holeIndex < 10; holeIndex++){
    let hole = getHole(holeIndex);
    hole.onclick = function() {
        if(hole.classList.contains("hole_has-mole") == true) {
            counterDeadMols++;
            deadMoles.textContent = counterDeadMols;
        }else {
            counterLostMols++;
            lostMoles.textContent = counterLostMols;
        }

         if(counterDeadMols == 10) {
            alert("Победа!");
            counterDeadMols = 0;
            counterLostMols = 0;
            deadMoles.textContent = counterDeadMols;
            lostMoles.textContent = counterLostMols;
        }else if(counterLostMols == 6) {
            alert("Вы проиграли!");
            counterDeadMols = 0;
            counterLostMols = 0;
            lostMoles.textContent = counterLostMols;
            deadMoles.textContent = counterDeadMols;
        }
    }
}


