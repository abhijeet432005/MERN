import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../store/reducers/userSlice'
import productsSlice from '../store/reducers/productsSlice'
import cartSlice from '../store/reducers/cartslice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
    cart: cartSlice,
  },
})