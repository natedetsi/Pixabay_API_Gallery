import React, { useState } from 'react';


const ImageSearch = ({ searchText }) => {

    const [text, setText] = useState(''); 

    const change = (e) => {
        setText(e.target.value)
    }

    const sleep = async () => {
        return await new Promise(t => setTimeout(t, 2000))
    }

    const onSubmit = (e) => {
        e.preventDefault(); 
        if (text === '') {
            const input = document.querySelector('input');
            input.classList.remove('border-none')
            input.classList.add('border', 'border-red-500', 'rounded');
            sleep().then(() => {
                input.classList.remove('border', 'border-red-500')
            })
            console.log(input)

            return
        }
        searchText(text)
    }
    
    return (
        <div className="max-w-sm rounded overflow-hidden my-20 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items center border-b-2 border-teal-500 py-2">
                    <input onChange={change} type="text" className="appearance-none border-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none "placeholder="Search Term..."/>
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded transition-color ease-in duration-200" type="submit">
                        Search
                    </button>
                </div>
            </form>         
        </div>
    )
}

export default ImageSearch;
