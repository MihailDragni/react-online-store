import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart-slice'
import modalSlice from './modal-slice'

export const store = configureStore({
  reducer: { cart: cartSlice, modal: modalSlice },
})
