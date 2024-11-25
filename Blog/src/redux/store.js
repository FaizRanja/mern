import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../redux/users/UserSlice';


export const store = configureStore({
  reducer: {
    user: todoReducer
  },
})