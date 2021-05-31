export const getAllProd = (shop_products) => {
    return {
        type: "ALL_PRODUCTS_LOADED",
        payload: shop_products
    }
}



export const idProduct = (product) => {
    return {
        type: "ID_PRODUCT_LOADED",
        payload: product
    }
}

export const onlyOneProduct = (product) => {
    return {
        type: "ONE_PRODUCT_LOADED",
        payload: product
    }
}

export const getCurrentProduct = (product) => {
    return {
        type: "GET_CURRENT_PRODUCT",
        payload: product
    }
}
