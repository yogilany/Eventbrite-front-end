import { TfiTicket } from 'react-icons/tfi';
import { CgProfile } from 'react-icons/cg'
import {FiExternalLink} from 'react-icons/fi'
import "./Publish.css"
import eventphoto from '../../assets/empt.png' 
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This component shows the actual event that you want to publish
 * @returns {JSX.Element of event you want to create found in publish page} 
 */
const Containerpub = (props) => {
    return (
        <div className='Full__Container' data-testid={props.data_testid}>
            <div >
                <img src={eventphoto} className='Full__Container_img' />
            </div>
            <div className='rtpart'>
                <h1 style={{ marginTop: 28, marginLeft: 10, fontSize: 20 }}>Food Truck Festival</h1>
                <div style={{ lineHeight: 0, marginTop: 12 }}>
                    <p class="mb-3" style={{ marginLeft: 10, fontSize: 12,width:"150%" }}>Tuesday, April 18, 2023 at 7:00 PM EET</p>
                    <p style={{ marginLeft: 10, fontSize: 12,width:"150%" }}>Egypt, Cairo, Cairo Governorate 12212</p>
                    <div style={{ marginTop: 25, marginRight: 10, display: 'flex' }}>
                        <TfiTicket style={{ width: 45, height: 20 }} />
                        <p style={{ marginTop: 10 }} >12</p>
                        <div style={{ marginLeft: 10, display: 'flex' }}>
                            <CgProfile style={{ width: 45, height: 20 }} />
                            <p style={{ marginTop: 10 }} >12</p>
                        </div>
                    </div>
                    <div className='hline'>
                    </div>
                    <div style={{ display: 'block', marginLeft: '35%' }}>
                        <div className='prev' style={{ display: 'flex', width:"150%" }}>
                            <p style={{ marginTop: 50, color: 'blue', fontSize: 14, cursor: 'pointer' }}>Preview your event</p>
                            <FiExternalLink style={{ width: 45, height: 20, color: 'blue', textAlign: 'center', marginTop: 40, cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Containerpub
