import axios from '../../api/axiosconfig'
import { loadproducts } from '../reducers/productsSlice'

export const asyncLoadProduct = () => async (dispatch) => {
    try {
        const {data} = await axios.get("/products")
        dispatch(loadproducts(data))
    } catch (error) {
        console.log(error)
    }
}

export const asyncCreateProduct = (product) => async (dispatch) => {
    try {
        await axios.post('/products', product)
        dispatch(asyncLoadProduct())
    } catch (error) {
        console.log(error)
    }
}

export const asyncUpdateProduct = (id, product) => async (dispatch) => {
    try {
        await axios.patch('/products/' + id, product)
        dispatch(asyncLoadProduct())
    } catch (error) {
        console.log(error)
    }
}

export const asyncDeletProduct = (id) => async (dispatch) =>{
    try {
        await axios.delete('/products/' + id)
        dispatch(asyncLoadProduct())
    } catch (error) {
        console.log(error)
    }
}