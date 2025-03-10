import { useSelector } from "react-redux"








export function Check(){

    let {loading_cart,error_cart,product_cart}=useSelector (function(state){return state.cart})
         let totalprice=  product_cart.reduce(function(acc,product_cart){
          acc+=product_cart.price
          return acc
        },0)
    return<>
     <div className="container   ">
        <div className="row py-5">
            <div className="card   ">
                <h1 className="text-center">{totalprice}</h1>
            </div>
        </div>
     </div>
    </>
  
  
  }
 