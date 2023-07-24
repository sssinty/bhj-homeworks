const cartProductList = document.querySelector(".cart__products");
const product = document.querySelectorAll(".product");
const productQuantitControl = Array.from(document.querySelectorAll(".product__quantity-control"));
const productQuantitNumb = Array.from(document.querySelectorAll(".product__quantity-value"));
const buttonAdd = Array.from(document.querySelectorAll(".product__add"));
const photoProduct = Array.from(document.querySelectorAll(".product__image"));

productQuantitControl.forEach(element => {
    const dataNumb = productQuantitNumb[element.closest("div[data-id]").dataset.id - 1]
    element.addEventListener("click", () => {
        if(dataNumb.textContent < 1) {
            dataNumb.textContent = 1;
        }else if(element.classList.contains("product__quantity-control_dec") == true) {
            dataNumb.textContent--
        }else {
            dataNumb.textContent++
        }
    });
});

buttonAdd.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        const cartProduct = document.createElement("div");
        cartProduct.classList.add("cart__product");
        cartProduct.dataset.id = element.closest("div[data-id]").dataset.id;

        const productImg = document.createElement("img");
        productImg.classList.add("cart__product-image");
        productImg.src = photoProduct[element.closest("div[data-id]").dataset.id - 1].src;

        const productCount = document.createElement("div");
        productCount.classList.add("cart__product-count");
        productCount.textContent = productQuantitNumb[element.closest("div[data-id]").dataset.id - 1].textContent;

        cartProduct.appendChild(productImg);
        cartProduct.appendChild(productCount);
        cartProductList.appendChild(cartProduct);
    });
});