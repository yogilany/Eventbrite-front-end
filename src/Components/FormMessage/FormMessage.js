import React from 'react'
import './FormMessage.scss'
const FormMessage = (props) => {
    return (
        <div className="formMsg">
            <div></div>
            <p>
                {props.children}
            </p>
        </div>
    )
}

export default FormMessage