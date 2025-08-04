import './Slider.css'
import MatchSchedule from './MatchSchedule.jsx';
import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Slider = () => {

   const START_GAP = 30;
   const SCROLL_AMOUNT = 500;
   const [translateX, setTranslateX] = useState(START_GAP);

   const handleNext = () => {
      setTranslateX((prev) => prev - SCROLL_AMOUNT);
   };

   const handlePrev = () => {
      setTranslateX((prev) => prev + SCROLL_AMOUNT);
   };

   return (
      <div className="slider-wrapper">
         <span className="indicator-icon left" onClick={handlePrev}>
            <RiArrowLeftSLine />
         </span>
         <div className="slider-contents"
         style={{ transform: `translateX(${translateX}px)` }}>
            <MatchSchedule className="item"/>
            <MatchSchedule className="item"/>
            <MatchSchedule className="item"/>
            <MatchSchedule className="item"/>
         </div>
         <span className="indicator-icon right" onClick={handleNext}>
            <RiArrowRightSLine />
         </span>
      </div>
   );
};

export default Slider;