import  {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
 



 

 export let fetchproduct=createAsyncThunk("product/fetcproduct",async function(){
 
   let data=await axios.get("https://dummyjson.com/products")
          return data.data.products
 
 });





let menueslice=createSlice({
name:"product",
initialState:{
loading:false,
error:"",
    product:[]

},

 
extraReducers:(function(builder){
    
    
    
    builder.addCase(fetchproduct.pending,function(state,action){

            state.loading=true


}


);



builder.addCase(fetchproduct.fulfilled,function(state,action){

    state.loading = false;
    state.product = action.payload


}


);

builder.addCase(fetchproduct.rejected,function(state,action){
    state.loading = false;

     state.error=action.error.message


}


);



}




)
 
})

export default menueslice.reducer
let {add}=menueslice.actions