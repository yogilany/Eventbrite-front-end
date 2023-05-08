import React from 'react'
import './FormMessage.scss'
const FormMessage = (props) => {
    return (
        <div className="formMsg">
            <div></div>
                {props.children}
        </div>
    )
}

export default FormMessage