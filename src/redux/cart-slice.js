import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orders: [],
  cartOpen: false,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      let isInArray = false
      state.orders.forEach((el) => {
        if (el.id === action.payload.id) {
          isInArray = true
        }
      })
      if (!isInArray) {
        state.orders = [...state.orders, action.payload]
        state.totalPrice += Number.parseFloat(action.payload.price)
      }
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter((el) => el.id !== action.payload.id)
      state.totalPrice -= Number.parseFloat(action.payload.price)
    },
    clearOrders: (state) => {
      state.orders = []
      state.totalPrice = 0
    },
  },
})

export const { addToOrder, deleteOrder, clearOrders } = cartSlice.actions
export default cartSlice.reducer
