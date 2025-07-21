import { useState } from 'react';
import Calendar from 'react-calendar';
import "../../css/reservationsComponents/ReservationSection.css"
const ArabicCalender = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className="calender">
            <Calendar
                onChange={setDate}
                value={date}
                locale="ar-EG"
            />
        </div>
    );
}

export default ArabicCalender;
