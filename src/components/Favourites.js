import React, { useState, useEffect } from 'react'
import ImageCard from '../components/images/ImageCard'
import Fade from 'react-reveal'
import Loading from './Loading'

const Favourites = ({ setTerm, favourites, images}) => {

    const [isLoading, setIsLoading] = useState(false);
    
    
    const difference = (arrOne, arrTwo) => {
        let arr = [];
        for (let item of arrOne) {
            
            for (let i = 0; i < arrTwo.length; i++) {
                if (item.id === parseInt(arrTwo[i]) ) {
                    arr.push(item)
                }
            }
        }
        return arr;
    }


    const favs = difference(images, favourites);
    localStorage.setItem('favourites', JSON.stringify(favs))
    console.log(JSON.parse(localStorage.getItem('favourites')))
    

    return (
        <div>
        {isLoading ? <Loading /> : <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {(favs.length == 0) ? <h1 className="align-center text-teal-900 text-xl">Nothing to show here, set some favourites in the photo gallery...</h1> : favs.map(image => (
            <Fade key={image.id}>
                <ImageCard 
                key={image.id} 
                image={image} 
                favourites={favourites}
                searchTags={(term) => {setTerm(term)}}
                />
            </Fade>
        ))}
        </div>}

        </div>
    )
}

export default Favourites
