import "./Publish.css"
import { CiCalendar, CiClock2 } from "react-icons/ci"
const DateTime = () => {
    return (
        <div>
            <h2 className='rdh'>When should we publish your event?</h2>
            <div style={{ display: 'flex' }}>
                <input type="radio"></input>
                <p style={{ marginLeft: 20, marginTop: 15, color: '#39364f' }}>Publish Now</p>
            </div>
            <div style={{ display: 'flex', lineHeight: 0, marginBottom: 10 }}>
                <input type="radio"></input>
                <p style={{ marginLeft: 20, marginTop: 10, color: '#39364f' }}>Schedule for later</p>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ backgroundColor: '#f2f2f5', width: 240, height: 50 }}>
                    <div style={{ display: 'flex' }}>
                        <CiCalendar style={{ height: 50, width: 20, marginLeft: 10 }}></CiCalendar>
                        <div style={{ display: 'block', lineHeight: 0, marginTop: 15 }}>
                            <p style={{ fontSize: '.8rem', marginLeft: 12, color: '#aaaaab' }}>Start date</p>
                            <p style={{ fontSize: '1rem', marginLeft: 12 }}>03/11/2023</p>

                        </div>

                    </div>
                </div>
                <div style={{ marginLeft: 10, backgroundColor: '#f2f2f5', width: 240, height: 50 }}>
                    <div style={{ display: 'flex' }}>
                        <CiClock2 style={{ height: 50, width: 20, marginLeft: 10 }}></CiClock2>
                        <div style={{ display: 'block', lineHeight: 0, marginTop: 15 }}>
                            <p style={{ fontSize: '.8rem', marginLeft: 12, color: '#aaaaab' }}>Start time</p>
                            <p style={{ fontSize: '1rem', marginLeft: 12 }}>2:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div><p style={{ fontSize: '.875rem', lineHeight: '1.25rem' }}>Time zone is same as your event's</p></div>

        </div>
    )
}

export default DateTime
