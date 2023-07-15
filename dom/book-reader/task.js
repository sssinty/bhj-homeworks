const controlerSize = document.querySelectorAll('.font-size');
const bookSize = document.querySelector('.book');


for(let element of controlerSize) {
    element.addEventListener('click', (e) => {
          controlerSize.forEach(elementActive => {
            if(elementActive.classList.contains('font-size_active' ) == true) {
                elementActive.classList.remove('font-size_active')
            }
        })
        if(element.dataset.size == 'small') { 
            element.classList.toggle('font-size_active');
            bookSize.classList.toggle('book_fs-small');
            
        }else if(element.dataset.size == 'big') {
            element.classList.toggle('font-size_active');
            bookSize.classList.toggle('book_fs-big');
        }else {
            element.classList.toggle('font-size_active');
            bookSize.classList.remove('book_fs-big');
            bookSize.classList.remove('book_fs-small');
        }
        e.preventDefault();
    }, false)
}

