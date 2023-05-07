import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart-slice'
import modalReducer from './modal-slice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
})
