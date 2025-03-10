import  {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
let cartslice=createSlice({
name:"product",
initialState:{
loading_cart:false,
error_cart:"",
    product_cart:[]

},

reducers:{
add:function(state,action){
    state.product_cart.push(action.payload)
},
del:function(state,action){
    state.product_cart = state.product_cart.filter(ele => ele.id != action.payload.id);
 
  }
},
 
 
})

export default cartslice.reducer
export let {add,del}=cartslice.actions