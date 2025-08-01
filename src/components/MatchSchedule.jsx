import './MatchSchedule.css';
import club1 from '/imgs/clubLogo/seoul.png';
import club2 from '/imgs/clubLogo/daejeon.png';
import { FaLocationDot } from "react-icons/fa6";

const MatchSchedule = () => {
   return (
      <div>
         <div className="match-wrapper">
            <div className="dday-wrapper">
                  <span>D-1</span>
            </div>
            <div className="match--info">
               <div className="match--info__text">
                  <div className="match-type">하나은행 K리그1</div>
                  <div className="match-date">2025.07.27 (일)</div>
                  <div className="match-time">19:00</div>
                  <div className="match-loca">
                     <FaLocationDot className="loca-icon"/>
                     <span>대전월드컵경기장 (A)</span>
                  </div>
               </div>
               <div className="match--info__vs">
                  <div className="club-logo">
                     <img src={club1} className="logo-img"></img>
                     <span className="club-name">서울</span>
                  </div>
                  <div className="club-vs">
                     <span>VS</span>
                     <div className="match-round">24R</div>
                  </div>
                  <div className="club-logo">
                     <img src={club2} className="logo-img"></img>
                     <span className="club-name">대전</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MatchSchedule;