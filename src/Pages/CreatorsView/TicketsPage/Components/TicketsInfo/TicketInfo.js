import React from 'react'
import "./ticketInfo.css";
import { FiMenu } from 'react-icons/fi'
import { CiMenuKebab } from 'react-icons/ci'
import { useState } from 'react';
import { useContext } from 'react';
import { AppEditContext } from '../../TicketsPage';
/**
 * @author Mahmoud Khaled
 * @param {ticketName} ticketName
 * @param {ticketDate} ticketDate
 * @param {amount} Amount
 * @param {Prices} Price
 * @description Component that contains tickets information(Name-Date)
 * @returns {JSX.Element}
 */
const TicketInfo = ({ticketName,ticketDate,amount,Price,btnID,event,setEvent}) => {
  const [showBtnMenu, setShowBtnMenu] = useState(false);
  const { isEdit, setIsEdit } = useContext(AppEditContext);
  const { ID, setID } = useContext(AppEditContext);
  const deleteTicket = (id) => {
    const newEvent = event;
    newEvent.tickets.splice(id, 1);
    console.log("id " + id);
    console.log(newEvent);
    setEvent({...event, newEvent});
  }
  return (
    <div className="ticket__info">
      <div className="ticket__info-body">
        <FiMenu />
        <div className="ticket-name-date">
          <h1 className='ticket__name'>{ticketName}</h1>
          <p className='ticket__date'>{ticketDate}</p>
        </div>
      </div>
      <div className='ticket-price-amount'>
        <p className='ticket__amount'>{amount}</p>
        <p className='ticket__price'>{Price}</p>
        <button className='btn__menu' onClick={() => setShowBtnMenu(true)}><CiMenuKebab className='ticket__menu' /></button>
        {showBtnMenu && 
        <div className='edit__delete-ticket'>
            <button id={btnID} className='Edit__button' onClick={(e) => { setIsEdit(true); setShowBtnMenu(false); setID(e.target.id)}}>Edit</button>
            <button id={btnID} className='Delete__button' onClick={(e) => { deleteTicket(e.target.id); setShowBtnMenu(false)}}>Delete</button>
            <button className='Cancel__button' onClick = {() => setShowBtnMenu(false)}>Cancel</button>
        </div>}
      </div>
      
    </div>
  );
}

export default TicketInfo