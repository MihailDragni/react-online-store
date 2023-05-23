import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const itemslSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    fetchItems: (state, action) => {
      state.items = action.payload
    },
  },
})

export const { fetchItems } = itemslSlice.actions
export default itemslSlice.reducer
