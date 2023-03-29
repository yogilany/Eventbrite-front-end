import React from 'react'
import './LikeComp.css'
import eventphoto from '../../../../assets/like3.jpeg'
import { BsFillSuitHeartFill } from "react-icons/bs"
import { FiShare } from "react-icons/fi"
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows the like component used in profile page showing The liked event with some information of this event like date and location.
 * @returns {JSX.Element of like component found in profile page} 
 */
const LikeComp = (props) => {
    return (
        <div className='box' data-testid={props.data_testid}>
            <div className='cont'>
                <img className='img' src={eventphoto} />
                <div className='circle'>
                    <BsFillSuitHeartFill className='ht' />
                </div>
            </div>

            <div style={{ marginTop: 25, paddingLeft: 10 }}>
                <div className='desc'>Demo Day: Present Your Project to get your dream job - GoMyCode Egypt</div>
                <div className='dat'>Thu,Mar 30,8:00 PM</div>
                <div className='det'>GoMyCode Dokki ,Ad Doqi A</div>

            </div>
            <div style={{ display: 'flex' }}>
                <div className='dfrt'>Free</div>
                <FiShare className='shr' />
            </div>


        </div>
    )
}

export default LikeComp
