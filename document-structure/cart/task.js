const cartProductList = document.querySelector(".cart__products");
const product = document.querySelectorAll(".product");

function addProduct(event) {
    const element = event.target.closest('.product');
	const elementId = element.dataset.id;
	const img = element.querySelector('.product__image').src;
    const productInCard = cartProductList.querySelector(`.cart__product[data-id="${elementId}"]`);

    if(productInCard) {
        const count = productInCard.querySelector('.cart__product-count');
	 	const currentCount = parseInt(count.textContent);

	 	const inputValue = element.querySelector('.product__quantity-value');
	 	const selectNum = parseInt(inputValue.textContent);
        count.textContent = currentCount + selectNum;
    }else {
        const cartProduct = document.createElement("div");
        cartProduct.classList.add("cart__product");
        cartProduct.dataset.id = elementId;

        const productImg = document.createElement("img");
        productImg.classList.add("cart__product-image");
        productImg.src = img;

        const productCount = document.createElement("div");
        productCount.classList.add("cart__product-count");
        const inputValue = element.querySelector('.product__quantity-value');
        const selectNum = parseInt(inputValue.textContent);
        productCount.textContent = selectNum;

        cartProduct.appendChild(productImg);
        cartProduct.appendChild(productCount);
        cartProductList.appendChild(cartProduct);
    
    };
};


product.forEach( element => {
    const plus = element.querySelector(".product__quantity-control_inc")
    const minus = element.querySelector(".product__quantity-control_dec")

    plus.addEventListener("click", () => {
        const inputNum = element.querySelector(".product__quantity-value")
        let num = inputNum.textContent;
		num ++;
		inputNum.textContent = num;
    });

    minus.addEventListener("click", () => {
        const inputNum = element.querySelector(".product__quantity-value")
        let num = inputNum.textContent
		if(num > 0) {
            num --;
		    inputNum.textContent = num;
        };
    });
    const buttonAdd = element.querySelector(".product__add");
    buttonAdd.addEventListener('click', addProduct);
});