import React from 'react'

const MainGrayButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-bold rounded-md text-sm px-5 py-1.5 mr-2 mb-2 focus:outline-none duration-500">{text}</button>
  )
}

export default MainGrayButton