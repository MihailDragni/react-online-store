import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart-slice'
import modalReducer from './modal-slice'
import categorySlice from './category-slice'
import itemsSlice from './items-slice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    category: categorySlice,
    items: itemsSlice,
  },
})
