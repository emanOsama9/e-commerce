import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
 

export function Navbar (props){
  let {error_cart ,product_cart,loading_cart}=useSelector (function(state){return state.cart})
 

    return<>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
      
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
     









      {props.user?
       <ul class="navbar-nav me-auto ms-2 mb-lg-0">
       <li class="nav-item">
          <Link class="nav-link" to="home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="details">Details</Link>
        </li>
         <li class="nav-item">
           <Link class="nav-link" to="shop">Shop</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="cart">Cart {product_cart.length}</Link>
         </li>
         <li class="nav-item">
           <Link class="nav-link" to="check">checkout</Link>
         </li>
         
       </ul>
      :""}
 
               {props.user
               
                ?
                
                 
               <li className="nav-item">
               <Link class="nav-link"><button  className="d border-none"onClick={props.logout}>Logout</button></Link>
               </li>
                              
                
                
                
                
                
                :   <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                   <Link class="nav-link active" aria-current="page" to="login">Login</Link>
                 </li>
                 <li class="nav-item">
                   <Link class="nav-link" to="register">Register</Link>
                 </li>     
                  
                   
                </ul>   }
            

     
    </div>
  </div>
</nav>
     </>
}  