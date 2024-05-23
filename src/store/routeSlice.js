import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  link:"#home",
}

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    switchLink: (state,action) => {
      state.link = action.payload
    },
  },
})

export const { switchLink } = routeSlice.actions

export default routeSlice.reducer