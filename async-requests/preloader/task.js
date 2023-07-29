const loaderImg = document.getElementById('loader');
const boxItem = document.getElementById('items');
const requestURL = ' https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const xhr = new XMLHttpRequest();

xhr.open('GET', requestURL);
xhr.responseType = 'json';
xhr.onload = () => {
    if(xhr.status === 200) {
        loaderImg.classList.toggle('loader_active');
        let currencysObj = xhr.response.response.Valute;

        for(let key in currencysObj) {
            const itemBlock = document.createElement('div');
            itemBlock.classList.add('item');

            const codeItem = document.createElement('div');
            codeItem.classList.add('item__code');
            codeItem.textContent = currencysObj[key].CharCode;

            const valueItem = document.createElement('div');
            valueItem.classList.add('item__value');
            valueItem.textContent = currencysObj[key].Value;

            const currencyItem = document.createElement('div');
            currencyItem.classList.add('item__currency');
            currencyItem.textContent = 'руб';

            itemBlock.appendChild(codeItem);
            itemBlock.appendChild(valueItem);
            itemBlock.appendChild(currencyItem);
            boxItem.appendChild(itemBlock);
        };
    };
};
xhr.send();

