import "./Publish.css"
import { CiCalendar, CiClock2 } from "react-icons/ci"
import { useState } from 'react';
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows the radio button container component used in publish page showing some data related to date and time of your event.
 * @returns {JSX.Element of Date and Tome component found in publish page} 
 */
const DateTime = (props) => {
    const [val, setval] = useState('now');
    const readorwrite = event => {
        setval(event.target.value);
    };
    return (
        <div data-testid={props.data_testid} style={{paddingBottom:70 }}>
            <h2 className='rdh'>{props.title}</h2>
            <div style={{ display: 'flex' }}>
                <input type="radio" id="publish_now" value= "now" name ='nowlater' onChange={readorwrite} checked={val === 'now'} style={{ cursor: "pointer" }}  ></input>
                <p style={{ marginLeft: 20, marginTop: 15, color: '#39364f' }}>{props.c1}</p>
            </div>
            <div style={{ display: 'flex', lineHeight: 0, marginBottom: 10 }}>
                <input type="radio" id="publish_sch" value = "sch"  name ='nowlater' onChange={readorwrite} checked={val === 'sch'} style={{ cursor: "pointer" }}></input>
                <p style={{ marginLeft: 20, marginTop: 10, color: '#39364f' }}>{props.c2}</p>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ backgroundColor: '#f2f2f5', width: 240, height: 50 }}>
                    <div style={{ display: 'flex' }}>
                        <CiCalendar style={{ height: 50, width: 20, marginLeft: 10 }}></CiCalendar>
                        <div style={{ display: 'block', lineHeight: 0, marginTop: 15}}>
                            <p style={{ fontSize: '.8rem', marginLeft: 12, color: '#aaaaab'}}>Start date</p>
                            <input type='text' id="Date_id_pub" defaultValue={"03/11/2023"} className="dd" readOnly= {val==="now"}/>

                        </div>

                    </div>
                </div>
                <div style={{ marginLeft: 10, backgroundColor: '#f2f2f5', width: 240, height: 50 }}>
                    <div style={{ display: 'flex' }}>
                        <CiClock2 style={{ height: 50, width: 20, marginLeft: 10 }}></CiClock2>
                        <div style={{ display: 'block',lineHeight:0, marginTop: 15 }}>
                            <p style={{ fontSize: '.8rem', marginLeft: 12, color: '#aaaaab' }}>Start time</p>
                            <input type='text' id="Time_id_pub" defaultValue={"2:00PM"} className="dd" readOnly= {val==="now"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div><p style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Time zone is same as your event's</p></div>
            {val==="sch" &&(<div class="ft">
                <button id="sch_butt" className="ftbtn">Schedule</button>
            </div>)}
            {val==="now" &&(<div class="ft">
                <button id="pub_button" className="ftbtn">Publish</button>
            </div>)}
        </div>
    )
}

export default DateTime
