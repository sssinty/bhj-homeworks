const pollTitle = document.getElementById('poll__title');
const btnBox = document.getElementById('poll__answers');

const requestURL = 'https://students.netoservices.ru/nestjs-backend/poll';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.responseType = 'json';
xhr.onload = () => {
    // console.log(xhr.response.data.answers, xhr.response.data)
    const answers = xhr.response.data.answers;
    pollTitle.textContent = xhr.response.data.title;
    for(let answerElem of answers) {
        let value = 0;
        if(answers.length > value) {
            const creatBtn = document.createElement('button');
            creatBtn.classList.add('poll__answer');
            creatBtn.textContent = answerElem;
            btnBox.appendChild(creatBtn);
            value++;
        };
    };

    const btnEvent = document.querySelectorAll('.poll__answer');
    btnEvent.forEach(element => {
        element.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
            location.reload();
        });
    });

}
xhr.send();
