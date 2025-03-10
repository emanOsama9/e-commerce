import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate  } from 'react-router-dom';
import { Login } from './component/login/Login';
import { Cart } from './component/cart/Cart';
import { Registerr } from './component/register/Register';
import { Catagories } from './component/catagories/Catagories';
import { Home } from './component/home/Home';
import { Navbar } from './component/navbar/Navbar';
 import { Catagories_details } from './component/catagories-details/Catagories-details';
import { Shop } from './component/Shop/Shop';
import { Check } from './component/checkout/Checkout';
import { Details } from './component/details/Details';
import { Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase/firebaseauth';
 
function App() {


  let[currentuser,setcurrentuser]=useState(null)

function getuser(){
 let Usertoken=JSON.parse(localStorage.getItem('tkn'))
 
 setcurrentuser(Usertoken)




}





let navigate=useNavigate()

async function logout( ){


localStorage.clear()
setcurrentuser("")
  await signOut(auth)
      navigate("/login")
 
  
}
function user_render(){
  if(localStorage.getItem("tkn")!=null){

             getuser()
  }

}
useEffect(function(){

user_render()







},[])


function Protectedroute(props){
if(currentuser!=null){

  return<>
  { props.children}
  </>
}


else {
  return <>
  
  
  
  
  <Navigate   to="/login"/>

   
  
  
  
  
  
  
  
  </>
}




}










  
  return <>
    <Navbar    user={currentuser}   logout={logout} />

      <Routes>
     <Route path='' element={<Home/>}/>
   <Route path='home' element={<Protectedroute><Home/></Protectedroute> }/>

 
     <Route path='login'element={ <Login sign={getuser}/>}/>
      
    <Route path='register' element={<Registerr/>}/>

     <Route path='details' element={<Protectedroute><Details/></Protectedroute> }>
     
 
     <Route path=':id' element= { <Details/> }/>

     
     
     
     
     </Route>

    <Route path='*' element={<h1 className='text-center'>Error 404</h1>}/>

             <Route  path='cart' element={<Protectedroute>< Cart/></Protectedroute> }/>
              <Route  path='catagories' element={<Protectedroute><Catagories/></Protectedroute> }/>
              <Route  path='catagories-details'element={<Protectedroute><Catagories_details/></Protectedroute> }>
           
            
             <Route  path=':category'element={<Catagories_details/>}/>

             
             </Route>
              
             <Route  path='check'element={ <Protectedroute><Check/></Protectedroute>}/>

             <Route  path='shop'element={ <Protectedroute><Shop/></Protectedroute>}/>

             <Route  path='*'element={<h1>Errors 404</h1>}/>
 




    </Routes>
  </> 
}

export default App;
