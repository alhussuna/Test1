import React from 'react';
import "./logo.css"
import 'tachyons'
import Logo1 from './logo1.png'
import Logo2 from './logo2.png'

function logo() {

  return (
    <div className="maindiv">
      <div className="banner">
        <h1> شركة البراق</h1>
      </div>
      <div className="logoicon">
        <div className="logoimgdiv1">
          <img className="logoimg1 br-100 shadow-3" alt="" src={Logo1}/>
        </div>
        <div className="logoimgdiv2">
          <img className="logoimg2 br-100 shadow-3" alt="" src={Logo2}/>
        </div>
      </div>
    </div>
  );
}

export default logo;
