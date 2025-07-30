import './SeoulCalendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import {useState} from 'react';
import dayjs from 'dayjs';
import {IoChevronForwardCircle, IoChevronBackCircle} from 'react-icons/io5';

const SeoulCalendar = () => {

   const [date, setDate] = useState(new Date());

   const handleClickDate = (pickDate) => {
      console.log(pickDate);
      setDate(pickDate);
   };

   const customCell = ({date, view}) => {
      if (view !== 'month') return null;
      return (
         <div className="custom-tile">
            <div className="date-number">{date.getDate()}</div>
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