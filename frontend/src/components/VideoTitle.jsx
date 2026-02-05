import React from 'react'
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[18%] p-12'>
      <h1 className='text-3xl font-bold text-white'>{title}</h1>
      <p className='text-white w-1/3'>{overview}</p>
      <div className='flex mt-8'>
        <button className=' flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'><FaPlay /><span>Play</span></button>
        <button className='flex mx-2 items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md'><MdOutlineInfo /><span>Watch more</span></button>
      </div>
    </div>
  )
}

export default VideoTitle
