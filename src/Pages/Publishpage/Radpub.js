import "./Publish.css"
const Radpub = () => {
    return (
        <div>
            <h2 className='rdh'>Who can see your event ?</h2>
                    <div style={{ display: 'flex' }}>
                        <input type="radio"></input>
                        <div style={{ display: 'block', lineHeight: 0 }}>
                            <p style={{ marginLeft: 20, marginTop: 10, color: '#39364f' }}>Public</p>
                            <p style={{ marginTop: 20, marginLeft: 20, fontSize: '.875rem' }}>Shared on Eventbrite and search engines</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <input type="radio"></input>
                        <div style={{ display: 'block', lineHeight: 0 }}>
                            <p style={{ marginLeft: 20, marginTop: 10, color: '#39364f' }}>Private</p>
                            <p style={{ marginTop: 20, marginLeft: 20, fontSize: '.875rem' }}>Only available to a selected audience</p>
                        </div>
                    </div>
        </div>
    )
}

export default Radpub
