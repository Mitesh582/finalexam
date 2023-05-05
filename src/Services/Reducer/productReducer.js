import { CREATE_PRODUCT, GET_PRODUCTS, GET_PRODUCT, ADD_TO_CART } from '../Constant/actionType'

const initialState = {
    Products: [],
    Product: {},
    isEdit: false,
    CartItems: []
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_PRODUCT:
            return state
            break;

        case GET_PRODUCTS:
            return {
                ...state,
                Products: action.payload,
                isEdit: false,
                Product: {}
            }
            break;

        case GET_PRODUCT:
            return {
                ...state,
                Product: action.payload,
                isEdit: true
            }
            break;

        case ADD_TO_CART:
            return {
                ...state,
                CartItems: [...state.CartItems, action.payload],
                isEdit: false
            };
        default:
            return state;
            break;
    }
}

export default productReducer;