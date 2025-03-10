import { Catagories } from "../catagories/Catagories";







export function Home (){


    return<>
      <div className=" position-relative " >
       <div className="video-container d-flex align-items-center ">
       <video autoPlay loop muted className="background-video">
        <source src="/istockphoto-1305498256-640_adpp_is (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       <div className="content m-auto w-100 ">
        <h1 className="text-white text-center "> 
            <br/>
              </h1>
               <button className="btnshop btn btn-light px-4 py-2">Shop Now</button>
          </div>
      </div>    
 





  



      </div>
        <Catagories/>
        <div className="d-flex justify-content-around">
           
            <div>
          <video autoPlay loop muted className="w-100 px-5">
        <source src="/6c5311f4b24d4a17837d57bc7b10eea4.HD-1080p-7.2Mbps-23180390 (1).mp4" type="video/mp4" />
             </video>
            </div>


                              <div  className="d-flex align-items-center video-content-section">
                                <p>
                                in the business
				enjoyment with our diverse collection of innovative furniture,from the finest materials and the finest details.<br/> From classic to historic modernity we have everything you need to suit your tastes and realize your vision of your dream home.!

                                </p>
                              </div>
         </div>
      </>
}