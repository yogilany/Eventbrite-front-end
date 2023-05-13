import React from 'react'

const MainOrangeButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-orange-700 hover:bg-orange-800 font-bold rounded-md text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-orange-700 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-900 duration-500">{text}</button>
  )
}

export default MainOrangeButton