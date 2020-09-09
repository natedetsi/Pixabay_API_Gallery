import React from 'react'
import Fade from 'react-reveal/Fade'

const PhotoDisplay = ({ image, setDisplay }) => {

    const changeDisplay = () => {setDisplay(false)}

    return (
        <Fade >
        <div  className=" z-10 p-4 rounded w-full">
            <img src={image} alt="" className="mx-auto border-solid border-4 border-gray-500" onClick={changeDisplay}/>
        </div>
        </Fade>
    )
}

export default PhotoDisplay
