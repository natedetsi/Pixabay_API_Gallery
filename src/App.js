import React, { useState } from 'react';
import ImageSearch from './components/images/ImageSearch';
import Videos from './components/video/video';
import About from './components/About'
import Favourites from './components/Favourites'
import Images from './components/images/Images'
import Navigation from './components/Navigation'

const lastPage = () => {
  if (localStorage.getItem('lastPage') !== null) {
    return localStorage.getItem('lastPage');
  } else {
    return 'Photo Gallery'
  }
}

function App() {


  const [term, setTerm] = useState('');
  const [images, setImages] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [currentPage, setCurrentPage] = useState(lastPage)

  const pageChanger = (page) => {
    localStorage.setItem('lastPage', page);
    setCurrentPage(page);
  }
  const changeTerm = (term) => {
    setTerm(term)
  }


  return (
    <div className="flex">
    <div className="container m-0 w-1/6">
      <Navigation page={pageChanger} currentPage={currentPage} />
    </div>
    <div className="container mx-auto w-5/6">
      {/* image searching section */}
      <ImageSearch searchText={(text) => {setTerm(text)}}/>
      {{
        'Photo Gallery' : <Images 
                            term={term}
                            images={images}
                            setImages={setImages} 
                            setTerm={changeTerm}
                            favourites={favourites}
                            />,
        'Video Gallery' : <Videos term={term} setTerm={ changeTerm}/>,
        'About' : <About />,
        'Favourites' : <Favourites 
                        term={term} 
                        favourites={favourites} 
                        setFavourites={setFavourites} 
                        images={images}
                        setTerm={changeTerm}
                        />
      }[currentPage]}
    </div>
    </div>
  );
}

export default App;
