import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-[15%] md:px-20 px-6 absolute bg-gradient-to-r from-black w-screen aspect-video h-screen">
      <h1 className="md:text-6xl text-2xl font-bold text-red-600">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg text-white w-1/3">{overview}</p>
      {/* <div className="">
        <button className="bg-gray-400 text-white px-10 p-4 text-lg w-15 mx-2 bg-opacity-55 rounded-md hover:bg-red-500">
          Play
        </button>
        <button className="bg-gray-400 text-white px-10 p-4 text-lg w-15 mx-2 bg-opacity-55 rounded-lg hover:bg-red-500">
          More info
        </button>
      </div> */}
    </div>
  );
}

export default VideoTitle
