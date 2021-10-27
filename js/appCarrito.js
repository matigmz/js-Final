const addToCart = document.getElementById("js-btnCart");

const addCart = () => {
    cart.push("")
    localStorage.setItem(cart)
};

addCart.addEventListener("click", push);