const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    let parsi = document.cookie.split('; ');
    let cookie = parsi.find(p => p.startsWith(name + '='));
    return cookie.substring(name.length + 1);
}

if(getCookie('name') === 'on') {
    modalWindow.classList.remove('modal_active');
}

modalClose.addEventListener('click', () => {
    setCookie('name', 'on');
    modalWindow.classList.remove('modal_active'); 
})

