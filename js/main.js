const products = [
    { id: 1, name: "Gancia", price: 450, stock: 20 },
    { id: 2, name: "Fernet", price: 750, stock: 30 },
    { id: 3, name: "Smirnof", price: 550, stock: 15 },
    { id: 4, name: "Quilmes", price: 120, stock: 60 },
    { id: 5, name: "Absolut", price: 2100, stock: 50 },
    { id: 6, name: "Jack Daniels", price: 6500, stock: 10 },
    { id: 7, name: "Patagonia 24.7", price: 250, stock: 50 },
    { id: 8, name: "Schneider", price: 130, stock: 50 },
    { id: 9, name: "Speed", price: 80, stock: 60 },
    { id: 10, name: "Monster", price: 190, stock: 40 },
    { id: 11, name: "Heineken", price: 165, stock: 50 },
    { id: 12, name: "Quilmes Pale Lager", price: 130, stock: 50 },
    { id: 13, name: "New Age", price: 175, stock: 50 },
    { id: 14, name: "Quilmes Red Lager", price: 130, stock: 40 },
    { id: 15, name: "Patagonia Amber Lager", price: 260, stock: 40 },
    { id: 16, name: "Patagonia Pilsener", price: 250, stock: 50 },
];

const cart = [];


const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("listaProductos", JSON.stringify(products));