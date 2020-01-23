import React from "react"

import "./Style.css";
import robert from '../images/robert_vicces.jpg';
import aron from '../images/aron.jpg';
import berci from '../images/berci.jpg';
import bruno from '../images/bruno.jpg';


const Team = () => {
  console.log(__dirname);
  return (
    <div className="background">
      <div className="team-grid-container">
        <div className="team-grid-head zawiasa shine">
          ZAWIASA
        </div>
        <div className="team-grid-item shine-combo">
          <img className="team-grid-item team-image" src={robert}/>
        </div>
        <div className="team-grid-item">
          <img className="team-image" src={aron}/>
        </div>
        <div className="team-grid-item">
          <img className="team-image" src={berci}/>
        </div>
        <div className="team-grid-item">
          <img className="team-image" src={bruno}/>
        </div>
        <div className="team-grid-item team-name shine"> ROBERT </div>
        <div className="team-grid-item team-name shine"> ARON </div>
        <div className="team-grid-item team-name shine"> BERNAT </div>
        <div className="team-grid-item team-name shine"> BRUNO </div>
      </div>
    </div>
  )
}

export default Team
