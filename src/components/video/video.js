import React, { useState, useEffect} from 'react';
import VideoCard from './VideoCard'
import Loading from '../Loading'


function Videos({ term, setTerm }) {

  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
//   const [showImage, setShowImage] = useState('');
//   const [show, setShow] = useState(false);


  // fetch images from pixabay, use term as the parameter 
  //when the term is changed the images are fetched 
  useEffect(() => {
    fetch(`https://pixabay.com/api/videos/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}`)
    .then(res => res.json())
    .then(data => {
      setVideos(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [term])


  
  return (
    <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        { isLoading ? <Loading /> :         
        videos.map( video => (
            <VideoCard 
            key={video.id} 
            video={video}
            searchTags={(tag) => {setTerm(tag)}} 
            />
        ))}
    </div>
  )
}

export  default Videos;