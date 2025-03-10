import { useDispatch, useSelector } from "react-redux"
import { del } from "../../redux/cartslice";


export function Cart (){
  let {loading_cart,error_cart,product_cart}=useSelector (function(state){return state.cart})
  let disbatch= useDispatch();
     
    return<>
    <div className="container py-5">
     <table className="w-100">
  
  <tbody>
    
     {product_cart? product_cart.map(function(ele){return<>
    
 
 



      <tr className="d-flex justify-content-between align-items-center">


       <td>{<img src={ele.images[0] }className="w-100 "/>  }</td>
      <td><h3 className="py-5">{ele.title}</h3></td>
      <td><h3 className="py-5 "> price :{ele.price}</h3></td>
    <button className="btn btn-danger" onClick={function(){disbatch(del({id:ele.id}))}}>Delete</button>
      </tr>

    
    
 
    
    
    </>



    }):""}
       
     
    
  </tbody>
</table>














    </div>
     </>
}