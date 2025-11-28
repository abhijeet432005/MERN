import axios from '../../API/AxiosConfig'
import { loadProduct, loadRelatedPro, loadSingleProduct } from '../reducers/productSlice'


export const fetchAllProduct = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/products/?limit=5')
        dispatch(loadProduct(data?.products))


    } catch (error) {
        console.log(error)
        
    }
}



export const getSingleProduct = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/products/${id}`)
        dispatch(loadSingleProduct(data))
    } catch (error) {
        console.log(error)
        
    }
}

export const getRelatedProducts = (cat) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/products/category/${cat}/?limit=5`)
        dispatch(loadRelatedPro(data?.products))
    } catch (error) {
        console.log(error)
        
    }
}


export const getProductByCategory = (cat) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/products/category/${cat}/?limit=5`)
        dispatch(loadProduct(data.products))
        
    } catch (error) {
        console.log(error)
        
    }
}