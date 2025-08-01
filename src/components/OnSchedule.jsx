import './OnSchedule.css';

const OnSchedule = ({schedule}) => {

   if (!schedule) return null;
   return (
      <div className={`onschedule-wrapper ${schedule.type}`}>
         <div className="onschedule-text">{schedule.text}</div>
      </div>
   );
};

export default OnSchedule;