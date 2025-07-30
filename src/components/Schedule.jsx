import './Schedule.css';
import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";

const Schedule = () => {
   return (
      <div>
         <div className="schedule-wrapper">
            <div className="schedule-date">
              <div className="dday">
                <div className="dday-back"></div>
                <span className="dday-num">D-1</span>
              </div>
              <span className="date">2025.07.23(수) 19:30</span>
            </div>
            <div className="schedule-match">하나은행 K리그1 2025 Round 23</div>
            <div className="schedule-team">FC서울 VS 제주</div>
            <div className="schedule-location">
               <FaLocationDot className="location-icon" />
               <span className="location-text">제주월드컵경기장(A)</span>
            </div>
         </div>
      </div>
   );
};

export default Schedule;