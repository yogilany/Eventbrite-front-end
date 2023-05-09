import React from 'react'
import "./ticketInfo.css";
import { FiMenu } from 'react-icons/fi'
import { CiMenuKebab } from 'react-icons/ci'
import { useState } from 'react';
/**
 * @author Mahmoud Khaled
 * @param {ticketName} ticketName
 * @param {ticketDate} ticketDate
 * @param {amount} Amount
 * @param {Prices} Price
 * @description Component that contains tickets information(Name-Date)
 * @returns {JSX.Element}
 */
const TicketInfo = ({ticketName,ticketDate,amount,Price}) => {
    const [showBtnMenu, setShowBtnMenu] = useState(false);
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
        <button className='btn__menu' onClick = {() => setShowBtnMenu(true)}><CiMenuKebab className='ticket__menu' /></button>
        {showBtnMenu && 
        <div className='edit__delete-ticket'>
            <button className='Edit__button'>Edit</button>
            <button className='Delete__button'>Delete</button>
            <button className='Cancel__button' onClick = {() => setShowBtnMenu(false)}>Cancel</button>
        </div>}
      </div>
    </div>
  );
}

export default TicketInfo