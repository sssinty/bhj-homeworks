const tabsArray = Array.from(document.querySelectorAll('.tab'));
const tabsContentArray = Array.from(document.querySelectorAll('.tab__content'));

tabsArray.forEach((tab, i) => tab.addEventListener('click', () => {
    tabsArray.forEach((element, index) => {
        element.classList.remove('tab_active');
        tabsContentArray[index].classList.remove('tab__content_active');
    });
    tab.classList.add('tab_active');
    tabsContentArray[i].classList.add('tab__content_active');
    
}));