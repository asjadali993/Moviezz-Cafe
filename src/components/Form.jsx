import React from 'react'

export default function Form(props) {
  return (
    <form className="container my-5" >
  <div className="">
    <div className='pt-3'>
    <input value={props.text} onChange={props.searchData} type="text" className="form-control" placeholder='Search For Movie'/>
    </div>
    <div className='d-flex justify-content-center mt-4'>
    <button onClick={props.getMovie} type="submit" className="btn btn-dark ms-1   ">Search</button>
    </div>
  </div>
  
</form>
  )
}
