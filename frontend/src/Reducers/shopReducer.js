const initialState = {
    List: [],
    // Product: [],
    OneIdProduct: [],
    SingleProduct: "",
    Loader: true

}
const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_PRODUCTS_LOADED":
            return {
                ...state,
                List: action.payload
            }
        case "ID_PRODUCT_LOADED":
            return {
                ...state,
                OneIdProduct: action.payload
            }
        case "ONE_PRODUCT_LOADED":
            return {
                ...state,
                Loader: false,
                SingleProduct: action.payload
            }
        case "GET_CURRENT_PRODUCT":
            return {
                ...state,
                Loader: false,
                SingleProduct: action.payload
            }
        default:
            return state;
    }
}
export default shopReducer;
