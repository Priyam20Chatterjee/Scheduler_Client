// import React from 'react'
// import { useState } from 'react'
// import LeftNav from '../components/shared/LeftNav'
// import TopNav from '../components/shared/TopNav'
// import Analitics from '../components/dashboard/Analitics'
// import Calendar from '../components/dashboard/Calendar'

// const Dashboard = () => {

//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [events, setEvents] = useState([
//     { id: 1, date: new Date(2025, 3, 18), time: '11:43 PM', title: 'lol', color: 'amber' }
//   ]);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//   };

//   const addEvent = (date, title) => {
//     const newEvent = {
//       id: events.length + 1,
//       date: date,
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//       title,
//       color: 'amber'
//     };
//     setEvents([...events, newEvent]);
//   };
//   return (
//     <section className='flex h-screen overflow-hidden'>
//       <div className='flex-[1]'>
//         <LeftNav />
//       </div>
//       <div className='flex-[8]'>
//         <div><TopNav /></div>

//         <div className='overflow-y-scroll h-[calc(100vh-64px)]'>
//           <Analitics />
//           <div className="min-h-screen p-5">
//             <div className="flex-start ">
//               <Calendar
//                 selectedDate={selectedDate}
//                 onDateSelect={handleDateSelect}
//                 events={events}
//                 onAddEvent={addEvent}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Dashboard

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
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);

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
      {/* LeftNav for medium and larger screens */}
      <div className="hidden md:block md:flex-[1]">
        <LeftNav />
      </div>

      {/* Main content */}
      <div className='flex-[8]'>
        <TopNav onMenuClick={() => setIsLeftNavOpen(true)} />
        <div className='overflow-y-scroll h-[calc(100vh-64px)]'>
          <Analitics />
          <div className="min-h-screen p-5">
            <div className="flex-start">
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

      {/* Sliding LeftNav for small screens */}
      <div className={`fixed inset-y-0 left-0 transform ${isLeftNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30 bg-white w-64 md:hidden`}>
        <LeftNav />
      </div>

      {/* Overlay for small screens when LeftNav is open */}
      {isLeftNavOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setIsLeftNavOpen(false)}
        />
      )}
    </section>
  )
}

export default Dashboard