import { useState } from 'react';
import Calendar from 'react-calendar';
const ArabicCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div dir="rtl" style={{ textAlign: 'center', fontFamily: 'Cairo' }}>
            <Calendar
                onChange={setDate}
                value={date}
                locale="ar-EG"
                calendarType="Hebrew"
            />
        </div>
    );
}
export default ArabicCalendar;