
 import { Link } from "react-router-dom"
import "./catagories.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchproduct } from "../../redux/sliceapi";
 export function Catagories (){

  let {loading,error,product}=useSelector (function(state){return state.product})
  let disbatch= useDispatch();
  let [beauty,setbeauty]=useState("beauty")
  let [fragrances,setfragrances]=useState("fragrances")
  let [furniture ,setfurniture]=useState("furniture")
  let [ groceries,setgroceries]=useState("groceries")

useEffect(function(){
 disbatch(fetchproduct())
},[])
     return<>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 ">
              <div className="d-flex justify-content-between img-catagories">
              
                  
             <Link to={`/catagories-details/${beauty}`}>
            <figure>
                    <img src="1.png" className="w-100"/>
               <figcaption>
                    <h1 className="text-center">Beauty</h1>
                </figcaption>
           </figure>
            
            </Link>
            <Link to={`/catagories-details/${furniture}`}>
            <figure>
                    <img src="3 (1).png" className="w-100"/>
               <figcaption>
                    <h1 className="text-center">furniture</h1>
                </figcaption>
           </figure>
            
            </Link>
            <Link to={`/catagories-details/${fragrances}`}>

             <figure>
                    <img src="3.png" className="w-100"/>
               <figcaption>
                    <h1 className="text-center">fragrances</h1>
                </figcaption>
           </figure>
            
            </Link>
            <Link to={`/catagories-details/${groceries}`}>

           <figure>
                    <img src="1 (1).png" className="w-100"/>
               <figcaption>
                    <h1 className="text-center">groceries</h1>
                </figcaption>
           </figure>
           </Link>
              </div>
           
               
           </div>
        </div>
      </div>
     </>
}