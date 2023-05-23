import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  activeCategory: 'all',
}

const categorylSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategories: (state, action) => {
      state.categories = action.payload
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    },
  },
})

export const { fetchCategories, setActiveCategory } = categorylSlice.actions
export default categorylSlice.reducer
