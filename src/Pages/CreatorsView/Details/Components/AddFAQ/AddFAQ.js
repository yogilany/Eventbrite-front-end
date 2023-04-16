import React, { Component, useContext } from 'react'
import './AddFAQ.css'
import { AddEventContext } from '../AddEvents/AddEvents'
/**
 * @author Mahmoud Khaled
 * @description This is Add Event Section in Details Page
 * @param {String} Title Title like FAQ or Agenda
 * @param {Component} Logo Take Logo of passed Title
 * @returns {JSX.Element}
 */
const AddFAQ = ({ Title, Logo }) => {
  const { addEventBtn, setAddEventBtn } = useContext(AddEventContext);
  return (
    <div className = "add__section-faq">
        <div className='add__section-faq-left'>
            <div className='faq__icon'>{Logo}</div>
            <h4 style = {{fontSize:'18px' , fontWeight : '700' , marginTop:'10px'}}>{Title}</h4>
        </div>
        <div className='add__section-faq-right'>
            <a href = "#" style = {{marginRight:'30px' , textDecoration:'none' , color:"rgb(54, 89, 227)"}}>How it works</a>
            <button id = "add__btn-faq" className='add__btn-faq' onClick = {() => {setAddEventBtn(!addEventBtn);}}>
                Add
            </button>
        </div>
    </div>
  )
}

export default AddFAQ