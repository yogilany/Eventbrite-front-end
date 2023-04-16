import "./Publish.css"
import { useState } from 'react';
import DateTime from './DateTime'
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows the radio button container component used in publish page showing if you can make your event public or private.
 * @returns {JSX.Element of Radio buttons component found in publish page} 
 */
const Radpub = (props) => {
    const [val, setval] = useState('public');
    const renderaudience = event => {
        setval(event.target.value);
    };
    return (
        <div data-testid={props.data_testid} className={props.className}>
            <h2 className='rdh'>Who can see your event ?</h2>
            <div style={{ display: 'flex' }}>
                <input type="radio" name="pubpriv" value="public" data_testid="radiopub" onChange={renderaudience} checked={val === 'public'} style={{ cursor: "pointer" }}></input>
                <div style={{ display: 'block', lineHeight: 0 }}>
                    <p style={{ marginLeft: 20, marginTop: 10, color: '#39364f' }}>Public</p>
                    <p style={{ marginTop: 20, marginLeft: 20, fontSize: '.875rem' }}>Shared on Eventbrite and search engines</p>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <input type="radio" name="pubpriv" value="private" data_testid="radiopri" onChange={renderaudience} checked={val === 'private'} style={{ cursor: "pointer" }}></input>
                <div style={{ display: 'block', lineHeight: 0 }}>
                    <p style={{ marginLeft: 20, marginTop: 10, color: '#39364f' }}>Private</p>
                    <p style={{ marginTop: 20, marginLeft: 20, fontSize: '.875rem' }}>Only available to a selected audience</p>
                </div>
            </div>
            {val === "public" && (
                <div className='dtt'>
                    <DateTime data_testid="DTID" title="When should we publish your event?" c1="Publish Now" c2="Schedule for later" />
                </div>
            )
            }
            {val === "private" && (<div className="audbox" >
                <h5>Choose your Audience</h5>
                <select name="verifcation" className="ver">
                    <option value="anyone" >Anyone with The link</option>
                    <option value="only">Only people with password</option>
                </select>
                <div className='dtt'>
                    <DateTime data_testid="DTID" title="Will this event ever be public?" c1="No, keep it private" c2="Yes, schedule to share publicly" />
                </div>
            </div>)
            }
        </div>
    )
}

export default Radpub
