import React from "react";
import './Shopaddress.css'
import { useState } from "react";

import shoplocation from "../../../shoplocation.json";
import showmore from "../../../public/angle-small-down.svg"

const Shopaddress = () => {
  const [showMoreInfo, setShowMoreInfo] = useState("hide")

  const showMore = () => {

  }


  return(
    <div className="location-list">
      {shoplocation.map((element) => 
        <div className="location" key={element.id}>
          <div>
            <p style={{fontWeight: "bold"}}>{element.name}</p>
            <p style={{fontSize: "12px", fontStyle: "italic"}}>{element.open}</p>
          </div>
          <img src={showmore} alt="showmore" style={{width: "30px", height: "30px"}}/>
        </div>
      )}
    </div>
  )
}

export default Shopaddress;
