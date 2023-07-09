const buttonDrop = document.querySelector(".dropdown");
const selectedValue = document.querySelector(".dropdown__value");
const listDrop = document.querySelector(".dropdown__list");
const elementDrop = Array.from(document.querySelectorAll(".dropdown__link"));

buttonDrop.addEventListener('click', function() {
    listDrop.classList.toggle("dropdown__list_active");
});

elementDrop.forEach(indexElmentDrop => {
    indexElmentDrop.addEventListener('click', function(e) {
        selectedValue.textContent = indexElmentDrop.textContent;
        e.preventDefault();
    }, false)
})

