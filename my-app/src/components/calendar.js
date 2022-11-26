import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarWidget = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="calendar-wrapper">
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}