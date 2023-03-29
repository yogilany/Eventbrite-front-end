import React from "react";
import { useState } from "react";
import "./Mapframe.scss";

function Mapframe(props) {
    return (
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=cairo&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
                <br/>
            </div>
        </div>
    )
}

export default Mapframe;