import { useDispatch, useSelector } from "react-redux";
import {  fetchproduct } from "../../redux/sliceapi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


import"./catagorie.css"
import { Catagories } from './../catagories/Catagories';
import { add } from "../../redux/cartslice";

export function Catagories_details (){
    let {loading,error,product}=useSelector (function(state){return state.product})
     let disbatch= useDispatch();

      
 useEffect(function(){
    disbatch(fetchproduct())
 },[])
   let x=useParams()
   console.log(x)
     return<>
    <div className="container">
        <div className="row ">
                 
            {Array.isArray(product) &&
    product.map((ele, index) =>
        ele.category === x.category
    ? ( // ✅ تصحيح المقارنة
            <div className="col-md-4 img-scale py-5  ">
                <div className="px-3">
                <Link to={`/details/${ele.id}`}>

                       <img src={ele.images[0] }className="w-100 "/> 
                   <h4 className="text-center">{ele.title}</h4>
                </Link>

                    <button  onClick={function(){disbatch(add(ele))}}className=" possition-absolute  btn btn-danger cart-btn ">Add to cart</button>
                    
                    
                    <div className="card my-5 bg-light">

                          <h4 className="px-1 text-center"> price :{ele.price}</h4>
                          <h4 className="px-1 text-center"> Rating :{ele.rating}</h4>
                          <h4 className="px-1 text-center"> Brands :{ele.brand}</h4>

                    </div>
                    
                    
                    </div>            
               
            
            
            
            </div> // ✅ إضافة `key`
        ) : null // ✅ استخدام `null` بدلاً من `""`
    )}
  
         </div>
    </div>
     </>
}