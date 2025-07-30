import SeoulCalendar from '../components/SeoulCalendar.jsx';
import Schedule from '../components/Schedule.jsx';
import './MatchSchedulePage.css';

const MatchSchedulePage = () => {
   return(
      <div className="wrapper">
         <div className="calendar">
            <SeoulCalendar />
         </div>
         <div className="schedules">
            <Schedule />
         </div>
      </div>
   );
};

export default MatchSchedulePage;