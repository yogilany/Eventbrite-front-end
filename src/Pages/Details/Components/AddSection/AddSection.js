import React from 'react'
import './addSection.css'

const AddSection = ({Title , Logo}) => {
  return (
    <div className = "add__section-agenda">
        <div className='add__section-agenda-left'>
            <div className='agenda__icon'>{Logo}</div>
            <h4 style = {{fontSize:'18px'}}>{Title}</h4>
        </div>
        <div className='add__section-agenda-right'>
            <a href = "#" style = {{marginRight:'30px' , textDecoration:'none' , color:"rgb(54, 89, 227)"}}>How it works</a>
            <button className='add__btn'>
                Add
            </button>
        </div>
    </div>
  )
}

export default AddSection