import roomsSlice from './roomsSlice';
import {configureStore} from '@reduxjs/toolkit';
const store=configureStore({
    reducer:{
        rooms:roomsSlice
    }
})
export default store;