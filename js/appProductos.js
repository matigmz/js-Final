const gridContainer = document.getElementById("js-gridContainer");
const searchInput = document.getElementById("js-searchBarInput");

//Lista de Productos

const htmlTemplate = (products) => {
    return `<div class="card">

    <p class="card-name">${products.name}</p>
    <p class="card-price">$${products.price}</p>
    <button type="submit" id="js-btnCart">Comprar</button>
    </div>`;
};


//Funcion Filtrar Productos

const renderHTML = (products, container) => {
    container.innerHTML = "";

    if (products.length > 0) {

        for (const product of products) {
            const producInHTML = htmlTemplate(product);


            container.innerHTML += producInHTML;

        }
    } else {
        container.innerHTML = `<p class="container__message">No se encontro el Producto</p>`
    }

};

renderHTML(products, gridContainer);


const filterProducts = () => {
    const searchInputValue = searchInput.value;

    const filterProducts = products.filter((products) => {
        const productNameLowerCase = products.name.toLowerCase();
        return productNameLowerCase.includes(searchInputValue.toLowerCase());
    })

    renderHTML(filterProducts, gridContainer);
};


searchInput.addEventListener("keyup", filterProducts);

//Funcion Añadir Productos