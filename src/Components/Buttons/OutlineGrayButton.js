import React from 'react'

const OutlineGrayButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} type="button" className="text-gray-700   border-gray-400 border-2 hover:bg-gray-100   hover:border-gray-800  font-bold rounded-md text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none duration-500">{text}</button>
  )
}

export default OutlineGrayButton