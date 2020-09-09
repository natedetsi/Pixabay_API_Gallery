import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import AppsIcon from '@material-ui/icons/Apps';
import PowerSettingsNewSharpIcon from '@material-ui/icons/PowerSettingsNewSharp';


const Navigation = ({ page, currentPage, changeBG }) => {

    const [show, setShow] = useState(false)
    const buttons = ["Photo Gallery", "Video Gallery", "Favourites","About"]

    const displayNav = (e) => {
        setShow(!show);
    }


    const pageChange = (e) => {
        page(e.target.innerText); 
        setShow(false)
    }


    return (
        
        <Fade left >
        <div className="fixed top-0 left-0 p-4 mb-5  h-full bg-teal-600 text-white text-lg z-30" >
            <AppsIcon className="cursor-pointer" onMouseEnter={displayNav}/>
            <Rotate left down>
            {show ? '' : <span className=" absolute top-60 left-0 mt-10 w-40 bg-teal-500 px-4 py-1 text-lg text-white shadow-lg rounded-br-sm rounded-tr-md z-20 border-b-2 border-teal-700 ">
                {currentPage}
            </span>}
            </Rotate>
            <div className="absolute bottom-0 py-3">
             <PowerSettingsNewSharpIcon onClick={changeBG} className="cursor-pointer"/>
             </div>
        </div>

        <Fade left >
        <div 
        className="fixed top-0 left-0 ml-10 h-full pt-20 bg-teal-600 p-2 z-40"
        onMouseLeave={displayNav}
        >
            {show ?     
            <ul className="transition-all ease-in-out duration-500" >
                {buttons.filter(button => button !== currentPage).map((button, index )=> (
                    <li key={index}>
                    <button 
                    className="mt-2 ml-5 p-2 hover:text-teal-900 text-white transition-color ease-in-out duration-500"
                    onClick={pageChange}
                        >{button}
                    </button>
                </li>
                ))}
            </ul>
            
             : null}

        </div>
        </Fade>
        </Fade>
    )
}

export default Navigation
