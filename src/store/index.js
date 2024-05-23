import { configureStore } from '@reduxjs/toolkit'
import routeSlice from './routeSlice'


export const store = configureStore({
  reducer: {
    route:routeSlice
  },
})
