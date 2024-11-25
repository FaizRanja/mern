import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../reduxtoolkit/Reducers/Todoreducer';

export const store = configureStore({
    reducer: todoReducer
})