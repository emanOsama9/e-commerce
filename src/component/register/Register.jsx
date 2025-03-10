import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../firebase/firebaseauth"
import { useNavigate } from "react-router-dom"


export function Registerr (){

  let navigate=useNavigate()
onAuthStateChanged(auth,function(currentuser){
  setuser(currentuser)
})
let [email,setemail]=useState("")
let [password,setpassword]=useState("")
let [user,setuser]=useState("")
let [error,seterror]=useState("")

async function getuser(e){
  try{
    e.preventDefault()
 
     let user= await createUserWithEmailAndPassword(auth,email,password)
    navigate("/home")

  }
  catch (error) {
    seterror(error.message);
    console.log(error.message);
  }
}

    return<>
     <section className="bg-dark vh-100 text-white">

     <div className="container py-5  ">
              
      <h1 className="text-center">Regesteration</h1>

                  <div className="row   py-5">
  <div className="col-md-6 m-auto py-5  ">
  {error && <div className="alert alert-danger">{error}</div>}

    <div>
      <label htmlFor="email">Email</label>
       <input type="text"id="email" placeholder="Email"className="form-control " onChange={function(e){setemail(e.target.value)}}/>
       <label htmlFor="password">Password</label>
       <input type="password" id="password" placeholder="Password"className="form-control " onChange={function(e){setpassword(e.target.value)}}/>
           <button className="btn btn-danger my-3 "onClick={getuser}>Register</button>
           {user? <h1>{user.email}</h1>:""}
     </div>
  </div>
               </div>
        </div>

     </section>
     </>
}