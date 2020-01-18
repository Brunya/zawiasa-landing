import React from "react"

import "./Style.css"
import "./Anim.css"


const Projects = () => {
  return (
    <div className="background gradient-bg">
      <div className="flexbox">
        <div className="expertise shine">
          EXPERTISE
        </div>
        <div className="projects-grid-container">
            <div className="sm1 small block"> DATABASE </div>
            <div className="sm1_1 small block"> SERVER </div>
            <div className="md1 medium block"> CLOUD<br/>SERVICE </div>
            <div className="sm2 small block"> UX & UI </div>
            <div className="sm2_1 small block"> WEBAPP </div>
            <div className="md2 medium block"> APPLICATION DEVELOPMENT </div>
            <div className="lg large block"> INTERNET<br/>OF<br/>THINGS </div>
            <div className="md3 medium block"> ARTIFICIAL<br/>INTELLIGENCE </div>
            <div className="sm3 small block"> MACHINE<br/>LEARNING </div>
            <div className="sm3_1 small block"> COMPUTER<br/>VISION </div>
            <div className="md4 medium block"> EDGE COMPUTING </div>
            <div className="sm4 small block"> RASPBERRY PI </div>
            <div className="sm4_1 small block"> MICRO CONTROLLERS </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
