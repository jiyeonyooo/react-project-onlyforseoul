import './SeoulCalendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import {useState} from 'react';
import dayjs from 'dayjs';

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
            onChange={handleClickDate} value={date}
            formatDay={() => ""}
            formatShortWeekday={(locale, date) => 
               date.toLocaleDateString('en-US', {weekday: 'short'}).toUpperCase()}
            tileContent={customCell}
         ></Calendar>
      </div>
   );
};

export default SeoulCalendar;