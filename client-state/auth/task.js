const inputSign = document.getElementsByClassName('control');
const btnLogout = document.querySelector('.logout__btn');
const formRegistr = document.querySelector('.signin');
const greetings = document.querySelector('.welcome');
const idUser = document.getElementById('user_id');
const formSign = document.getElementById('signin__form');

const urlRequest = 'https://students.netoservices.ru/nestjs-backend/auth';
const xhr = new XMLHttpRequest();

const signIn = () => {
    formRegistr.classList.remove('signin_active');
    greetings.classList.add('welcome_active');
};

window.addEventListener('load', () => {
	if (localStorage.loginId) {
		signIn();
		idUser.textContent = localStorage.loginId;
	}
});

formSign.addEventListener('submit', (e) => {
    e.preventDefault();

    const formDataFile = new FormData();
    formDataFile.append('login', inputSign[0].value);
    formDataFile.append('password', inputSign[1].value);

    xhr.open('POST', urlRequest);
    xhr.responseType = 'json';
    xhr.send(formDataFile);

    xhr.addEventListener('load', () => {
        let data = xhr.response
        if(data.success) {
            signIn();
            idUser.textContent = data.user_id;
            localStorage.loginId = data.user_id;
        }else {
            alert('Неверный логин/пароль!');
            formSign.reset();
        }
    });
});

btnLogout.addEventListener('click', (e) => {
    e.preventDefault();

    localStorage.remove();
    formRegistr.classList.add('signin_active');
    greetings.classList.remove('welcome_active');
    formSign.reset();
})

