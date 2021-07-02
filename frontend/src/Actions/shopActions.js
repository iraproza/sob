export const getAllProd = (shop_products) => {
    return {
        type: "ALL_PRODUCTS_LOADED",
        payload: shop_products
    }
}

export const getCurrentProduct = (product) => {
    return {
        type: "GET_CURRENT_PRODUCT",
        payload: product
    }
}

export const searchProduct = (product) => {
    return {
        type: "SEARCH_PRODUCT",
        payload: product  
    }
}

export const addNewShopProduct = (product) => {
    return {
        type: "ADD_NEW_PRODUCT",
        payload: product  
    }
}


export const editOneProduct = (CurrentProduct) => {
    return {
        type: "EDIT_PRODUCT", 
        payload: CurrentProduct 
    }
}