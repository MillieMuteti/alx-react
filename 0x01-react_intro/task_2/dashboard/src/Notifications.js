import React from 'react';
import closeBtn from './close-btn.png';
import { getLatestNotification } from './utils';
import './Notifications.css';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={{float:'right', background: 'none', border: 'none'}}
      arial-label="Close"
      onClick={()=>console.log("Close button has been clicked")}>

      <img src={closeBtn} alt="X" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
