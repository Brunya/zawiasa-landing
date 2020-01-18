import React from "react"

import "./Style.css"

const Team = () => {
  return (
    <div className="background">
      <div className="team-grid-container">
        <div className="team-grid-head zawiasa shine">
          ZAWIASA
        </div>
        <div className="team-grid-item">
          <img className="team-grid-item team-image" src="https://semantic-ui.com/images/avatar2/large/matthew.png"/>
        </div>
        <div className="team-grid-item">
          <img className="team-image" src="https://semantic-ui.com/images/avatar/large/elliot.jpg"/>
        </div>
        <div className="team-grid-item">
          <img className="team-image" src="https://fomantic-ui.com/images/avatar/large/chris.jpg"/>
        </div>
        <div className="team-grid-item">
          <img className="team-image" src="https://semantic-ui.com/images/avatar/large/christian.jpg"/>
        </div>
        <div className="team-grid-item team-name"> ROBERT </div>
        <div className="team-grid-item team-name"> ARON </div>
        <div className="team-grid-item team-name"> BERNAT </div>
        <div className="team-grid-item team-name"> BRUNO </div>
      </div>
    </div>
  )
}

export default Team
