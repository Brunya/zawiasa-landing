import React from "react"

import "./Style.css";
import robert from '../images/robert.jpg';
import aron from '../images/aron.jpg';
import berci from '../images/bernat.jpg';
import bruno from '../images/bruno.jpg';



const Team = () => {

  const [anim, setAnim] = React.useState(["close", ""]);

  function ModalContent(){
    switch(anim[1]){
      case "Robert":
        return (
          <>
            <p className="modal-name">ZAWIASA ROBERT HENRIK</p>
            <ul className="infos">
              <li>35 years professional programming experience</li>
              <li>Co-founder of the first internet provider company in Hungary</li>
              <li>Clojure, Java, C, C++, Python</li>
              <li>Hobbies: Microcomputers, Programming language design</li>
            </ul>
          </>
        )
      case "Aron":
        return (
          <>
            <p className="modal-name">ZAWIASA ROBERT ARON</p>
            <ul className="infos">
              <li>7 years professional programming experience</li>
              <li>Software consultant, Business advisor</li>
              <li>Clojure, Clojurescript</li>
              <li>Hobbies: Cryptocurrencies, Game development</li>
            </ul>
          </>
        )
      case "Bernat":
        return (
          <>
            <p className="modal-name" style={{fontSize: "44px"}}>ZAWIASA BERNAT BARNABAS</p>
            <ul className="infos">
              <li>2 years professional programming experience</li>
              <li>Junior frontend developer</li>
              <li>Clojure, Clojurescript</li>
              <li>Hobbies: Robotics</li>
            </ul>
          </>
        )
      case "Bruno":
        return (
          <>
            <p className="modal-name">ZAWIASA BRUNO MARTON</p>
            <ul className="infos">
              <li>3 years professional programming experience</li>
              <li>Junior full-stack developer</li>
              <li>Clojurescript, Javascript, Python</li>
              <li>Hobbies: Chatbots, Design</li>
            </ul>
          </>
        )
    }
  }

  return (
    <div className="background team-container">
      <div className="team-grid-container">
        <div className="team-grid-head zawiasa shine">
          ZAWIASA
        </div>
        <div className="team-grid-item shine-combo" onClick={() => setAnim(["show", "Robert"])}>
          <img className="team-image" src={robert}/>
        </div>
        <div className="team-grid-item" onClick={() => setAnim(["show", "Aron"])}>
          <img className="team-image" src={aron}/>
        </div>
        <div className="team-grid-item" onClick={() => setAnim(["show", "Bernat"])}>
          <img className="team-image" src={berci}/>
        </div>
        <div className="team-grid-item" onClick={() => setAnim(["show", "Bruno"])}>
          <img className="team-image" src={bruno}/>
        </div>
        <div className="team-grid-item team-name shine"> ROBERT </div>
        <div className="team-grid-item team-name shine"> ARON </div>
        <div className="team-grid-item team-name shine"> BERNAT </div>
        <div className="team-grid-item team-name shine"> BRUNO </div>
      </div>
      <div className={`modal ${anim[0]}`}>
        {ModalContent()}
      </div>

      <div className={`modal-bg ${anim[0]}`} onClick={() => setAnim(["close", ""])}></div>
    </div>
  )
}

export default Team
