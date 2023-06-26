const cookieClick = document.getElementById("cookie");
const clickCount = document.getElementById("clicker__counter");
cookie.onclick = function() {
    clickCount.textContent++
    if(cookieClick.width == "200") {
        cookieClick.width = "190";
    }else {
        cookieClick.width = "200";
    }
}