import React from 'react';


const VideoCard = ({video, searchTags}) => {

    const tags = [...video.tags.split(', ')]


    const search = (e) => {
        const id = e.target.id;
        searchTags(tags[id])
      }


    const controls = (e) => {
        const video = e.target;
        if (video.hasAttribute('controls')) {
            video.removeAttribute('controls')
        } else {
            video.setAttribute('controls', '')
        }
    }


    return (
        <div className="inline-block max-h-full max-w-sm h-sm rounded overflow-hidden shadow-lg m-4 z-0">
        <div >  
      <video alt="" className="w-full z-0" onMouseEnter={controls} onMouseLeave={controls}>
        <source src={video.videos.tiny.url}/>
      </video>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl">
          Video by {video.user} 
        </div>
        <ul>
          <li>
          <strong>Views: </strong>
          { video.views}
          </li>
          <li>
          <strong>Downloads: </strong>
          { video.downloads}
          </li>
          <li>
          <strong>Likes: </strong>
          { video.likes}
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
      


export default VideoCard;
