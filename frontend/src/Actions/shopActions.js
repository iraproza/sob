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

export const searchContact = (name) =>{
    return{
        type: "SEARCH_CONTACT",
        payload: name
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