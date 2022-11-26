import React from "react";

import './index.css';
// import "./topbar.css";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faGears, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">OpenReplay</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <FontAwesomeIcon icon={faBell} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <FontAwesomeIcon icon={faLanguage} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <FontAwesomeIcon icon={faGears} />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;