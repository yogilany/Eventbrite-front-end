import React from 'react'
import './promoCodesInfo.css'
import { CiMenuKebab } from "react-icons/ci";
import { useState } from 'react';
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
const PromoCodesInfo = ({ name, codeType, disacount, Uses, Status }) => {
  const [showBtnMenu, setShowBtnMenu] = useState(false);
  return (
    <div className="promo__codesInfo">
      <table style={{ width: "900px" }}>
        <tr className="table__header" style = {{padding:'20px'}}>
          <th>Name</th>
          <th>Code type</th>
          <th>Discount</th>
          <th>Uses</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{codeType}</td>
          <td>{disacount}</td>
          <td>{Uses}</td>
          <td>{Status}</td>
          <button className='delete__edit__cancel' onClick = {(e) => setShowBtnMenu(true)}><CiMenuKebab /></button>
          {showBtnMenu && <div className='PromoCode-edit__delete-ticket'>
            <button className='Edit__button'>Edit</button>
            <button className='Delete__button'>Delete</button>
            <button className='Cancel__button' onClick={() => setShowBtnMenu(false)}>Cancel</button>
          </div>}
        </tr>
      </table>
    </div>
  );
}

export default PromoCodesInfo