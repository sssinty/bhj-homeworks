const revealElement = Array.from(document.querySelectorAll('.reveal'))




addEventListener('scroll', () => {
    revealElement.forEach(element => {
        const {top, bottom} = element.getBoundingClientRect();
        console.log(element.getBoundingClientRect());
        if(bottom < 0 || top > window.innerHeight) {
            return false
        }
        element.classList.add('reveal_active');
    });
})



