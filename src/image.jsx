import React from "react";
import img1 from './assets/images/flavoured_dates.png';

function Imgaf(){
    return (
        <div>
            <img src={img1} alt=""/>
            <img
              src={img1}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Application Logo"
            />
        </div>
    )
}

export default Imgaf;