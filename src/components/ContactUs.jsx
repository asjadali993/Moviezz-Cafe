import React from 'react'
import { useState, useEffect } from "react";
import { HashLoader } from 'react-spinners';

export default function ContactUs() {
  
  const override = {
    margin: " auto",
    padding:"200px 0",
    height:"300px"
    
  };

let [loading, setLoading] = useState(false);
useEffect(()=>{
setLoading(true)
setTimeout(() => {
setLoading(false)
}, 1000);


},[])
  return (

<>
<section >
{
            loading ?
             <HashLoader speedMultiplier={2} cssOverride={override} color={"rgb(20, 100, 220)"} loading={loading} size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> :
  <div>
<h1 class="head text-center py-5"> <span>contact</span> us </h1>

<form className="container py-2  ">
 <div className='row'>
  <div className="col-6 form mb-4 ">
    <input type="text" id="form4Example1" className="form-control " placeholder='Name' />
    
  </div>
 
  <div className="col-6 form mb-4">
    <input type="email" id="form4Example2" className="form-control " placeholder='Number' />
   
  </div>
  </div>
  <div className='row'>
  <div className="col-6 form mb-4 ">
    <input type="text" id="form4Example1" className="form-control  " placeholder='Email address' />
   
  </div>
 
  <div className="col-6 form mb-4">
    <input type="email" id="form4Example2" className="form-control " placeholder='Subject' />
    
  </div>
  </div>

  <div className="form mb-4">
    <textarea className="form-control " id="form4Example3" rows="6" placeholder='Your Message'></textarea>
  
  </div>

  <button type="submit"  className="btn  btn-primary  mb-4">Send Message</button>
</form></div>
}
</section>
</>
  )
}
