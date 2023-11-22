import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchRooms=createAsyncThunk('rooms/fetchRooms' , 
  async ()=>{
    const response =await axios.get('http://localhost:3000/rooms') ;
    return response.data
});

const initialState={
    loading:false,
    roomsList:[],
    errorMessage:null
};

const roomsSlice=createSlice({
    name:'rooms',
    initialState:initialState,
    
    extraReducers:{
        [fetchRooms.pending]:(state)=>{
            state.loading=true
        },
        [fetchRooms.fulfilled ]:(state,action)=>{
            state.loading=false;
            state.roomsList=action.payload;
            state.errorMessage=""
        },
        [fetchRooms.rejected]:(state,action)=>{
            state.loading=false;
            state.roomsList=[];
            state.errorMessage=action.payload
        },
    }
})


export default roomsSlice.reducer;