import React from 'react'
import './OrderComp.css'
import eventphoto from '../../../../assets/randomeventphoto.png'
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows the order component used in profile page showing The ordered event with some information of this event like date and location.
 * @returns {JSX.Element of order component found in profile page} 
 */
const OrderComp = (props) => {
    return (
        <div className='MainComp' data-testid={props.data_testid}>
            <div className='Datee'>
                <p style={{ color: 'red' }}>Mar</p>
                <p style={{ color: 'grey' }}>30</p>
            </div>
            <img src={eventphoto} className='Full_Container_img' />
            <div className='eventdata'>
                <h3 style={{ paddingBottom: 0 }}>Demo Day: Present Your Project to get your dream job - GoMyCode Egypt</h3>
                <div className='detaileddate'>Thu,Mar 30,8:00pm EET </div>
                <div className='detaileddated'>Free order #6209763949 placed on Fri,Mar 24,2:46 PM</div>
            </div>
        </div>
    )
}

export default OrderComp
