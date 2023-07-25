const hasTooltip = document.querySelectorAll(".has-tooltip");
const tooltip = document.querySelector(".tooltip");

for(let element of hasTooltip) {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        if(tooltip.textContent == element.title){
            tooltip.classList.toggle("tooltip_active");
        }else if(tooltip.textContent != element.title) {
            tooltip.textContent = element.title;
            tooltip.classList.add("tooltip_active");
            tooltip.style.left = element.getBoundingClientRect().left + "px";
            tooltip.style.top = element.getBoundingClientRect().top + 20  + "px";
        }
    }, false);
}