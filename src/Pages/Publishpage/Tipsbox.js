import "./Publish.css"
import bulb from '../../assets/bulb.png'
const Tipsbox = () => {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <img src={bulb} alt="bulbLogo" style={{ width: 40, height: 45 }} />
                <p className='tpyp'>Tips before you publish</p>
            </div>
            <div style={{ marginTop: 12, backgroundColor: '#f8f7fa', width: 485, height: 125 }}>
                <div style={{ padding: 15 }}>
                    <p style={{ fontSize: 14, color: '#3659e3', cursor: 'pointer', marginLeft: 30, fontWeight: 600, fontFamily: 'Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif' }}>Create promo codes for your event</p>
                    <p style={{ fontSize: 14, color: '#3659e3', cursor: 'pointer', marginLeft: 30, fontWeight: 600, fontFamily: 'Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif' }}>Customize your order form </p>
                    <p style={{ fontSize: 14, color: '#3659e3', cursor: 'pointer', marginLeft: 30, fontWeight: 600, fontFamily: 'Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif' }}>Add this event to collection to increase visibility</p>
                </div>

            </div>



        </div>
    )
}

export default Tipsbox
