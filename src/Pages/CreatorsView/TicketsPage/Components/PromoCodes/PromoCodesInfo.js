import React from 'react'
import './promoCodesInfo.css'
import { CiMenuKebab } from "react-icons/ci";
import { useState } from 'react';
import { useContext } from 'react';
import { AppEditContext } from '../../TicketsPage';
/**
 * @author Mahmoud Khaled
 * @description Component to store saved PromoCodes 
 * @param {name} Name
 * @param {codeType} codeType
 * @param {disacount} Discount
 * @param {Uses} Uses
 * @param {Status} Status
 * @returns {JSX.Element}
 */
const PromoCodesInfo = ({ name, codeType, disacount, Uses, Status , btnID , event , setEvent }) => {
  const [showBtnMenu, setShowBtnMenu] = useState(false);
  const { isEditPromo, setIsEditPromo } = useContext(AppEditContext);
  const { ID, setID } = useContext(AppEditContext);
  const deletePromoCode = (id) => {
    const newEvent = event;
    newEvent.promocodes.splice(id, 1);
    setEvent({ ...event, newEvent });
  }
  return (
          <tr>
            <td colSpan={1}>{name}</td>
            <td colSpan={2}>{codeType}</td>
            <td colSpan={1}>{disacount}</td>
            <td colSpan={2}>{Uses}</td>
            <td colSpan={1}>{Status}</td>
            <button className='delete__edit__cancel' onClick = {(e) => setShowBtnMenu(true)}><CiMenuKebab /></button>
            {showBtnMenu && <div className='PromoCode-edit__delete-ticket'>
              <button id={btnID} className='Edit__button' onClick={(e) => { setIsEditPromo(true); setShowBtnMenu(false); setID(e.target.id)}}>Edit</button>
              <button id={btnID} className='Delete__button' onClick={(e) => { deletePromoCode(e.target.id); setShowBtnMenu(false); }}>Delete</button>
              <button className='Cancel__button' onClick={() => setShowBtnMenu(false)}>Cancel</button>
            </div>}
          </tr>
  );
}

export default PromoCodesInfo