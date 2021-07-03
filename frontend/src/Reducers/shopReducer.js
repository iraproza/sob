const initialState = {
    List: [],
    SingleProduct: "",
    searchList: [],
    valueSearch: ''
}
const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_PRODUCTS_LOADED":
            return {
                ...state,
                List: action.payload,
                // lookingProduct: action.payload
            }
        case "GET_CURRENT_PRODUCT":
            return {
                ...state,
                SingleProduct: action.payload
            }


        case "ADD_NEW_PRODUCT":
            return {
                List: [
                    ...state.List,
                    action.payload]
            }


        case "SEARCH_CONTACT":
            const tmpList = state.List.slice();
            let newList = tmpList.filter((item) => {
                return item.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
            });
            
            if (newList.length === 0) {
                return {
                    ...state,
                    searchList: [],
                    valueSearch: action.payload
                }
            } else {
                return {
                    ...state,
                    searchList: newList,
                    valueSearch: action.payload
                }
            }

        case "EDIT_PRODUCT":
            return{
                ...state,   
                SingleProduct: action.payload,      
            }
            
        default:
            return state;
    }
}
export default shopReducer;