import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function MovieDetails(props) {



  return (



<>
{props.isMovie?
  <div className='row pb-4 d-flex align-items-center justify-content-center'>
<div className='col-lg-3 col-11'>
  <img src={props.movieData.Poster} className="card-img-top" alt="Movie Image"/>
  </div>
  <div className=" col-lg-3 col-11">
    <h1 className="card-title my-3">{ props.movieData.Title}</h1>
    <p className="card-text"><strong> Type : </strong>{props.movieData.Type}</p>
    <p className="card-text"><strong>Year : </strong>{props.movieData.Year}</p>
    <p className="card-text"><strong>imdbID : </strong>{props.movieData.imdbID}</p>
    <Link to="/watch" className="btn btn-dark">Watch Now</Link>
    </div>
</div> :
<h2 className='text-center py-5 text-muted'>Type above to search for movies</h2>

}




</>
  )
};
