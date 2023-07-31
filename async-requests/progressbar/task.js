const progress = document.getElementById('progress');
const btnAddFile = document.getElementById('file');
const btnSendFile = document.getElementById('send');
const form = document.getElementById('form')
const requestURL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

function upload(btnAddFile) {
    
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const file = btnAddFile.files[0];
    const formDataFile = new FormData();
    formDataFile.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', requestURL);
    xhr.upload.onprogress = e => {
        progress.value = (e.loaded / e.total)
    };
    xhr.send(formDataFile)
});





