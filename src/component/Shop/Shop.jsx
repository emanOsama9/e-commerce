
import { useDispatch, useSelector } from "react-redux";
import {  fetchproduct } from "../../redux/sliceapi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { add } from "../../redux/cartslice";



export function Shop (){
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
                 
           {product? product.map(function(ele){

                return<>
                <div className="col-md-4 img-scale py-5   ">
                <div >
                <Link to={`/details/${ele.id}`}>

                <img src={ele.images[0] }className="w-75 ms-5"/> 
                <h4 className="text-center">{ele.title}</h4>
                </Link>
                     <button  onClick={function(){disbatch(add(ele))}}className=" possition-absolute  btn btn-danger cart-btn ">Add to cart</button>
 

                    
                    
                <div className="card my-5 bg-light">

                  <h4 className="px-1 text-center"> price :{ele.price}</h4>
                     <h4 className="px-1 text-center"> Rating :{ele.rating}</h4>
                   <h4 className="px-1 text-center"> Brands :{ele.brand}</h4>

                 </div>
                    
                    
                    
                    </div>            
               
            
            
            
            </div>  
                
                
                
                
                
                
                
                </>

           }):""}
  
         </div>
    </div>
     </>
}