const URL = "http://localhost:4000/api/v1/products";

export async function getAllProducts() {
    const allProducts = await fetch(URL)
        .then((response) => {
            return response.json()
        })
        .then(data => {
            return data;
        })
        .catch(err => console.log(err));
    return allProducts;
}


export async function getOneProduct(Id) {
    const oneProduct = await fetch(`http://localhost:4000/api/v1/product/${Id}`)
        .then((response) => {
            return response.json()
        })
        .then(data => {
            return data;
        })
        .catch(err => console.log(err));
    return oneProduct;
}

export async function getDeleteProduct(Id) {
    const allProducts = await fetch(`http://localhost:4000/api/v1/products-delete/${Id}`, {
        method: 'DELETE'
    })
        .then((response) => {
            return response.json()
        })
        .then(data => {
            return data;
        })
        .catch(err => console.log(err));
    return allProducts;
}