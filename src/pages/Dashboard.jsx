import React from 'react'
import { useState } from 'react'
import LeftNav from '../components/shared/LeftNav'
import TopNav from '../components/shared/TopNav'
import Analitics from '../components/dashboard/Analitics'
import Calendar from '../components/dashboard/Calendar'

const Dashboard = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([
    { id: 1, date: new Date(2025, 3, 18), time: '11:43 PM', title: 'lol', color: 'amber' }
  ]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const addEvent = (date, title) => {
    const newEvent = {
      id: events.length + 1,
      date: date,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      title,
      color: 'amber'
    };
    setEvents([...events, newEvent]);
  };
  return (
    <section className='flex'>
       <div className='flex-[1]'>
              <LeftNav/>
       </div>
       <div className='flex-[8]'>
              <div><TopNav/></div>
              <Analitics/>
              <div className="min-h-screen bg-gray-50 p-5">
                <div className="flex-start w-full max-w-4xl">
                  <Calendar 
                    selectedDate={selectedDate} 
                    onDateSelect={handleDateSelect} 
                    events={events}
                    onAddEvent={addEvent}
                  />
                </div>
              </div>
       </div>
    </section>
  )
}

export default Dashboard