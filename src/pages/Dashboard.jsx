import React from 'react'
import { useState } from 'react'
import LeftNav from '../components/shared/LeftNav'
import TopNav from '../components/shared/TopNav'
import Analitics from '../components/dashboard/Analitics'
import Calendar from '../components/dashboard/CommonCalendar'

const Dashboard = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

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
    <section className='flex h-screen overflow-hidden'>
      <div className='flex-[1]'>
        <LeftNav />
      </div>
      <div className='flex-[8]'>
        <div><TopNav /></div>

        <div className='overflow-y-scroll h-[calc(100vh-64px)]'>
          <Analitics />
          <div className="min-h-screen p-5">
            <div className="flex-start ">
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
                events={events}
                onAddEvent={addEvent}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard