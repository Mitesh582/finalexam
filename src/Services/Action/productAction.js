import { Api } from "../../Component/Api/BaseUrl";
import { CREATE_PRODUCT, GET_PRODUCTS, GET_PRODUCT } from '../Constant/actionType'

export const CreateProduct = (data) => {
    return {
        type: CREATE_PRODUCT,
        payload: data
    }
}
export const CreateProductAsync = (data) => {

    return async (dispatch) => {

        const result = await Api.post("/Products", data)

        dispatch(getProductsAsync())
    }
}
export const getProducts = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}
export const getProductsAsync = () => {

    return async dispatch => {
        const res = await Api.get("/Products")
        dispatch(getProducts(res.data))
    }
}
export const getProduct = (data) => {
    return {
        type: GET_PRODUCT,
        payload: data
    }
}
export const getProductAsync = (id) => {

    return async dispatch => {
        const res = await Api.get(`/Products/${id}`)
        dispatch(getProduct(res.data))
    }
}