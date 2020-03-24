import React from "react"

import "./Style.css"

import deakdelta from '../images/deakdelta.png';
import taki from '../images/taki.png';

const Partners = () => {
  return (
    <div className="background flexbox-partners">
        <div className="partners shine">PARTNERS</div>
        <div className="logos">
          <a href="http://www.deakdelta.hu/kplusf.html" target="_blank">
            <img className="partner-logo" src={deakdelta}/>
          </a>
          <a href="https://www.mta-taki.hu/en" target="_blank">
            <img className="partner-logo" src={taki}/>
          </a>
        </div>
    </div>
  )
}

export default Partners
