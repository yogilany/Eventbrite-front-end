import React from 'react'
import './FollComp.css'
import emptyprofile from '../../../../assets/emptyprofile.png'
/**
 * @author Ziad Ezzat
 * @param {string} props.text
 * @param {string} props.data_testid
 * @description This is container for Following box found in Profile page showing following pages and it takes text as props to show name of the page that user is following
 * @returns {JSX.Element of following component used in Profile Page} 
 */
const FollComp = (props) => {
    return (
        <div style={{display:'flex',marginTop:10}} data-testid={props.data_testid}>
            <img src={emptyprofile} alt="profilelogo" style={{ width: 65, height:65 }} />
            <h5 style={{marginTop:20,fontSize:17}}>{props.text}</h5>
            <button className='btnfol'>Following</button>



        </div>
    )
}

export default FollComp
