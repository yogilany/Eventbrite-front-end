import react from 'react';
import { useState } from 'react';
import './Loctype.scss';

function Loctype(props) {
    return (
        <div class="wrapper">
            <input type="radio" name="selectloctype" id="option-1" defaultChecked onClick={props.onchoose} />
            <input type="radio" name="selectloctype" id="option-2" onClick={props.onchoose} />
            <input type="radio" name="selectloctype" id="option-3" onClick={props.onchoose} />
            <label for="option-1" class="option option-1">
                <span>Venue</span>
            </label>
            <label for="option-2" class="option option-2">
                <span>Online Event</span>
            </label>
            <label for="option-3" class="option option-3">
                <span>To be announced</span>
            </label>
        </div>
    )
}

export default Loctype;