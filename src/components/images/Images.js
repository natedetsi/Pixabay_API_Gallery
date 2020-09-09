import React, { useState, useEffect} from 'react';
import ImageCard from './ImageCard';
import Loading from '../Loading'
import PhotoDisplay from '../PhotoDisplay'
import Fade from 'react-reveal/Fade'


function Images({ term, setTerm, favourites, images, setImages }) {

  
  const [isLoading, setIsLoading] = useState(true);
  const [showImage, setShowImage] = useState('');
  const [show, setShow] = useState(false);


  // fetch images from pixabay, use term as the parameter 
  //when the term is changed the images are fetched 
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [term])


  
  return (
    <div className="container mx-auto z-0">
    {/* display photo on click */}
      {show ? <PhotoDisplay image={showImage} setDisplay={setShow}/> : null}

    {/* if is loading display loading... else display photos */}
      {isLoading ? <Loading />: <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

        {images.map(image => (
          <Fade key={image.id}>
          <ImageCard 
          key={image.id} 
          image={image}
          images={images} 
          searchTags={(tag) => {setTerm(tag)}} 
          setDisplay={(url) => {setShowImage(url)}} setShow={setShow}
          favourites={favourites}
          />
          </Fade>
        ))}

      </div>}
    </div>
  );
}

export default Images;
