import React from 'react'
import LeftNav from '../components/shared/LeftNav'
import TopNav from '../components/shared/TopNav'
import Header from '../components/calender/Header'
// import WeekCalendar from '../components/calender/week/WeekCalender'
import CommonCalendar from '../components/dashboard/CommonCalendar'

const Calendar = () => {
  return (
    <section className='flex h-screen overflow-hidden'>
    <div className='flex-[1]'>
      <LeftNav />
    </div>
    <div className='flex-[8]'>
      <div><TopNav /></div>

      <div className='overflow-y-scroll h-[calc(100vh-64px)]'>
        <Header/>
        {/* <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <WeekCalendar />
        </div> */}

        <div className='p-5 bg-gray-100'>
          <CommonCalendar />
        </div>

        

      </div>
    </div>
  </section>
  )
}

export default Calendar