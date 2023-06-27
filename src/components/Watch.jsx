import React from 'react'

export default function Watch(props) {
  return (
    <div className="container mt-4 mt-4">
      <div className="row justify-content-between">
        <div className="col-lg-8">
          <div className="">
            <video className="w-100 rounded" autoPlay controls>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h4 className="mt-4">{ props.movieData.Title}</h4>
          <p>Lorem ipsum dolor  placeat commodi at, laborum suntfr assumenda sunt officiis laboriosam nam porro repellat veritatis atque, autem consectetur maxime beatae commodi impedit. Amet, quibusdam neque repellat eius, voluptatibus sequi numquam quas vitae, eaque consequatur deserunt tenetur. Blanditiis, impedit esse. Labore?</p>
        </div>
        <div className="col-lg-3">
          <h5 className='text-white'>Top rated Movies</h5>
          <div className=" h-50">
            <a href="/" className=" rounded  mb-4 back-color list-group-item list-group-item-action h-25 "><img className="video-image rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ifE3k8XDp9Pdj1ySnBCiY2QI1TYE0wEqVcz1cBlutVg5ZsHm43cYITHTNvWen6R_JMs&usqp=CAU" alt="Movie 1" /></a>

            <a href="/" className=" mb-4 back-color list-group-item list-group-item-action h-25"> <img className="video-image rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HIIJCz-LXIg0CAqk_sQMs1EZidrk8o9NAkjKdTSLm4eHs-4rbSwBpRsYnZqce2x_QEg&usqp=CAU" alt="Movie 2" /></a>

            <a href="/" className=" mb-4 back-color list-group-item list-group-item-action h-25"> <img className="video-image rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ifE3k8XDp9Pdj1ySnBCiY2QI1TYE0wEqVcz1cBlutVg5ZsHm43cYITHTNvWen6R_JMs&usqp=CAU" alt="Movie 3" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
