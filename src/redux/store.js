import { configureStore } from "@reduxjs/toolkit";
 import productslice from './sliceapi'
 import cartslice from"./cartslice"
export let mystore=configureStore({reducer:{

 product:productslice,
 cart:cartslice



}})