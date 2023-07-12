const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let index = 1;

setInterval(function() {
    rotatorCase.forEach(element => {
        if(element.classList.contains('rotator__case_active')) {
            element.classList.toggle('rotator__case_active');
        }
    });

    if(index == 5) {
        index = 1;
    }
    rotatorCase[index].classList.toggle('rotator__case_active');
    index++

}, 1000);