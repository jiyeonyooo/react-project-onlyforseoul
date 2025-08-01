import './SeoulCalendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import {useState} from 'react';
import dayjs from 'dayjs';
import {IoChevronForwardCircle, IoChevronBackCircle} from 'react-icons/io5';
import schedules from '../data/Schedules.jsx';
import OnSchedule from './OnSchedule.jsx';

const SeoulCalendar = () => {

   const [date, setDate] = useState(new Date());

   const handleClickDate = (pickDate) => {
      console.log(pickDate);
      setDate(pickDate);
   };

   const customCell = ({date, view}) => {
      if (view !== 'month') return null;

      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      const daySchedules = schedules[formattedDate] || [];

      return (
         <div className="custom-tile">
            <div className="date-number">{date.getDate()}</div>
            <div className="schedule-list">
               {daySchedules.map((s, idx) => (
                  <OnSchedule key={idx} schedule={s} />))}
            </div>
         </div>
      );
   };

   return (
      <div className="calendar__wrapper">
         <Calendar 
            calendarType = "hebrew"
            onChange={handleClickDate} value={date}
            formatDay={() => ""}
            formatShortWeekday={(locale, date) => 
               date.toLocaleDateString('en-US', {weekday: 'short'}).toUpperCase()}
            tileContent={customCell}
            prev2Label={null}
            next2Label={null}
            prevLabel={<IoChevronBackCircle className="calendar-icon back"/>}
            nextLabel={<IoChevronForwardCircle className="calendar-icon forward"/>}
         ></Calendar>
      </div>
   );
};

export default SeoulCalendar;