const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

setInterval(function() {
    rotatorCase.forEach(element => {
        element.classList.toggle('rotator__case_active');
    });
}, 1000);