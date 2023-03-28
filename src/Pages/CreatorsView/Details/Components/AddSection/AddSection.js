<<<<<<< HEAD
import React, { Component, useContext } from 'react'
import './addSection.css'
import { AddEventContext } from '../AddEvents/AddEvents'
=======
import React, { Component } from "react";
import "./addSection.css";
>>>>>>> ccce5fccd03b85e21f903018b2d9ba374d3cd3de
/**
 * @author Mahmoud Khaled
 * @description This is Add Event Section in Details Page
 * @param {String} Title Title like FAQ or Agenda
 * @param {Component} Logo Take Logo of passed Title
 * @returns {JSX.Element}
 */
const AddSection = ({ Title, Logo }) => {
<<<<<<< HEAD
  const { addAgendaBtn, setAddAgendaBtn } = useContext(AddEventContext);
  return (
    <div className = "add__section-agenda">
        <div className='add__section-agenda-left'>
            <div className='agenda__icon'>{Logo}</div>
            <h4 style = {{fontSize:'18px'}}>{Title}</h4>
        </div>
        <div className='add__section-agenda-right'>
            <a href = "#" style = {{marginRight:'30px' , textDecoration:'none' , color:"rgb(54, 89, 227)"}}>How it works</a>
            <button className='add__btn' onClick = {() => {setAddAgendaBtn(!addAgendaBtn);}}>
                Add
            </button>
        </div>
=======
  return (
    <div className="add__section-agenda">
      <div className="add__section-agenda-left">
        <div className="agenda__icon">{Logo}</div>
        <h4 style={{ fontSize: "18px" }}>{Title}</h4>
      </div>
      <div className="add__section-agenda-right">
        <a
          href="#"
          style={{
            marginRight: "30px",
            textDecoration: "none",
            color: "rgb(54, 89, 227)",
          }}
        >
          How it works
        </a>
        <button className="add__btn">Add</button>
      </div>
>>>>>>> ccce5fccd03b85e21f903018b2d9ba374d3cd3de
    </div>
  );
};

export default AddSection;
