import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchproduct } from '../../redux/sliceapi';
export function Details(){

   let {loading,error,product}=useSelector (function(state){return state.product})
   let disbatch= useDispatch();


   let {id}=useParams()

                                           
 useEffect(function(){
   disbatch(fetchproduct())
},[])







return<>
 
 



 <section className='bg-dark h-auto'>

<div className='container'>

               <h1 className='text-center text-white'>product Details <hr className='w-25 m-auto py-4'/></h1>
  <div className='row py-5 '>
  {product? product.map(function(pro){
                   return<>
                      {pro.id==id?
                      
                      
                            <div className='d-flex justify-content-between align-items-center card' >



                                  <div className='col-md-6  '>

                                                        <div>
                                       <img src={pro.images[0] }className="w-100 img-scale "/> 

                                                 
,                                             <br/>
                                       


                                                      </div>
                                            </div>

                     
                      
                                          <div className='col-md-4 '>
                                                <h1 className='text-center'>  {pro.title}</h1>
                                                <p className='text-center '>  {pro.description}</p>

                                                <h1 className='text-center'> price: {pro.price}</h1>

                                          </div>
                    
                      
                       
                       

                               </div>
                    
                      
                      
                      
                      :""}
                       </> 
              }):""}

    </div>
    <div className='row '>
  {product? product.map(function(pro){
                   return<>
                      {pro.id==id?
                      
                      
                            <div className='d-flex justify-content-between  m-auto align-items-center card w-50 ' >



                                  <div className='col-md-6  '>

                                                        <div>
 
                                                              <h6 className='text-center'> category:  {pro.category}</h6>
                                                              <h6 className='text-center' > brand:  {pro.brand}</h6>

                                                                       <h6 className='text-center'>discountPercentage:  {pro.discountPercentage}</h6>
                                                                       <h6 className='text-center'>Rating:  {pro.rating}</h6>
                                                                       <h6  className='text-center'>stock:  {pro.stock}</h6>
 
                                                                       <h6 className='text-center'   >Dimension:<br/>  <span className='text-center'>  width :{pro.dimensions.width}</span>
                                                                        
                                                                        
                                                                        <br/>
                                                                        <span className='text-center'>  height :{pro.dimensions.height}</span>
                                                                        <br/>
                                                                        <span className='text-center'>  depth :{pro.dimensions.depth}</span>
                                                                       </h6>

                                                      </div>
                                            </div>

                     
                       
                      
                       
                       

                               </div>
                    
                      
                      
                      
                      :""}
                       </> 
              }):""}

    </div>

</div>


 








               </section>




































</>







}             
