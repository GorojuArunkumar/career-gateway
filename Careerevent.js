// CareerEventCalendar.js

import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

const CareerEventCalendar = () => {
  const events = [
    { title: 'Career Fair', date: '2024-05-15', location: 'Hyderabad, Company' },
    { title: 'Resume Writing Workshop', date: '2024-05-20', location: 'Online' },
    { title: 'Career Fair', date: '2024-05-1', location: 'Hyderabad, Company' },
    { title: 'Resume Writing Workshop', date: '2024-05-5', location: 'Online' },
    { title: 'Technical Skills Workshop', date: '2024-06-15', location: 'Hyderabad, AII Convention' },
    { title: 'Professional Development Workshop', date: '2024-06-20', location: 'Hyderabad, Company' },
    { title: 'Technical Workshop', date: '2024-06-01', location: 'Hyderabad, Hitech City' },
    { title: 'Employability Skills Workshop', date: '2024-06-02', location: 'Hyderabad, Banjara Hills' },
    { title: 'Professional Development Workshop', date: '2024-07-2', location: 'Hyderabad, Company' },
    { title: 'Technical Workshop', date: '2024-07-01', location: 'Hyderabad, Hitech City' },
    { title: 'Employability Skills Workshop', date: '2024-07-09', location: 'Hyderabad, Banjara Hills' }
  ];

  const handleEventClick = (info) => {
    const { title, location } = info.event.extendedProps;
    alert(`Event: ${title}\nLocation: ${location}`);
  };

  return (
    <div>
      <h1>Career Event Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        eventContent={(arg) => {
          const { event } = arg;
          const content = document.createElement('div');
          content.innerText = event.title;
          content.style.fontSize = '12px';
          content.style.padding = '5px';
          content.style.border = '1px solid #ccc';
          return { domNodes: [content] };
        }}
      />
    </div>
  );
};

export default CareerEventCalendar;
