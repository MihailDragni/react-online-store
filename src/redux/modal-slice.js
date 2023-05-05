import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  fullItem: {},
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onShowModal: (state, action) => {
      state.fullItem = { ...action.payload }
      state.isOpen = !state.isOpen
    },
    closeModal: (state) => {
      state.isOpen = false
    },
  },
})

export const { onShowModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
