import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';


const ImageCard = ({image, searchTags, setDisplay, setShow, favourites, images}) => {
    const tags = image.tags.split(', ')
    const [fav, setFav] = useState(false);

    const search = (e) => {
      const id = e.target.id;
      searchTags(tags[id])
    }

    const openDisplay = (e) => {
      const url = e.target.src;
      setDisplay(url)
      setShow(true)
      console.log(url)
    }

    const showFav = (e) => {
      const img = e.target;
      img.classList.add('opacity-75')
      setFav(!fav)
    }

    const hideFav = (e) => {
      const img = e.target;
      img.classList.remove('opacity-75')
      setFav(false)
    }

    const newFavourite = (e) => {

      const newFav = e.target.parentElement.parentElement.dataset.id;
  
      if(favourites.includes(newFav) || newFav == undefined) {return};

      const favourite = images.findIndex(item => item.id == newFav);
      
      images[favourite].isFavourite = true;
      
      favourites.push(newFav)
    }
  

    return (

        <div className="relative inline-block max-h-full max-w-sm h-sm rounded overflow-hidden shadow-lg m-4 z-0">

              <div  onMouseEnter={showFav} onMouseLeave={hideFav} className="relative z-0" data-id={image.id} >  

                  {fav ?  <FavoriteIcon className="absolute left-0 top-0 hover:opacity-1 cursor-pointer ml-50 mt-50 z-10" 
                  onClick={newFavourite}
                  onMouseEnter={(e) => {e.target.style.fill = 'red';}}
                  onMouseLeave={(e) => {e.target.style.fill = 'black'}
                  }
                  /> : null }

                  {image.isFavourite ? 
                  <FavoriteIcon 
                    className="absolute left-0 top-0 hover:opacity-1 cursor-pointer ml-50 mt-50 z-10"
                    style={{fill: 'red'}}
                  /> : null}

                <img src={image.webformatURL} alt="" className="w-full" />
              </div>

            <div className="px-6 py-4 z-0">
            <div className="font-bold text-purple-500 text-xl">
              Photo by {image.user} 
              </div>
                <ul>
                  <li>
                  <strong>Views: </strong>
                  { image.views}
                  </li>
                  <li>
                  <strong>Downloads: </strong>
                  { image.downloads}
                  </li>
                  <li>
                  <strong>Likes: </strong>
                  { image.likes}
                  </li>
                </ul>
              </div>

            <div className="px-6 py-4">
              {tags.map((tag, index) => (
              <span onClick={search} key={index} id={index} className="inline-block bg-gray-200 cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-teal-300 mr-2 mt-2 transition-all ease-in-out duration-500"> #{tag}</span>
              ))}
            </div>
        </div>
    )
        }
      


export default ImageCard;
