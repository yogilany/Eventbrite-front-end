import "./Publish.css"
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows the radio button container component used in publish page showing if you can make your event public or private.
 * @returns {JSX.Element of Radio buttons component found in publish page} 
 */
const Radpub = (props) => {
    return (
        <div data-testid={props.data_testid}>
            <h2 className='rdh'>Who can see your event ?</h2>
                    <div style={{ display: 'flex' }}>
                        <input type="radio" name="pubpriv" data_testid= "radiopub" checked></input>
                        <div style={{ display: 'block', lineHeight: 0 }}>
                            <p style={{ marginLeft: 20, marginTop: 10, color: '#39364f' }}>Public</p>
                            <p style={{ marginTop: 20, marginLeft: 20, fontSize: '.875rem' }}>Shared on Eventbrite and search engines</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <input type="radio" name="pubpriv" data_testid= "radiopri"></input>
                        <div style={{ display: 'block', lineHeight: 0 }}>
                            <p style={{ marginLeft: 20, marginTop: 10, color: '#39364f' }}>Private</p>
                            <p style={{ marginTop: 20, marginLeft: 20, fontSize: '.875rem' }}>Only available to a selected audience</p>
                        </div>
                    </div>
        </div>
    )
}

export default Radpub
