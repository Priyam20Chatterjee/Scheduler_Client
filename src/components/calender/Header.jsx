import React from 'react'
import { useState } from 'react'
import CommonCalendar from '../dashboard/CommonCalendar'
import WeekCalendar from '../calender/week/WeekCalender'
const Header = () => {
    const[isToggleMonthWeekView, setIsToggleMonthWeekView] = useState(true)
  
  return (
    <>
    <section className='flex justify-between'>
        <div className='mt-5 ml-5 flex flex-col gap-2'>
            <p className='text-black text-3xl font-semibold'>Calender</p>
            <h6 className='text-gray-500'>Monthly and Weekly View of your tasks.</h6>
        </div>
        <div className='mt-4 mr-3 pl-3 pr-3 rounded-full flex bg-gray-200 gap-3'>  
         
           {/* <button className='bg-white p-3 rounded-full mt-3 mb-3 tracking-wide text-blue-700 font-medium'>Month</button> */}

            <button
               onClick={() => setIsToggleMonthWeekView(true)}
               className={`p-3 rounded-full mt-3 mb-3 tracking-wide font-medium 
               ${isToggleMonthWeekView ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'}`}
             >
             Month
            </button>
            {/* <button className='bg-white p-3 rounded-full mt-3 mb-3 tracking-wide text-blue-700 font-medium'>Week</button> */}

            <button
               onClick={() => setIsToggleMonthWeekView(false)}
               className={`p-3 rounded-full mt-3 mb-3 tracking-wide font-medium 
               ${!isToggleMonthWeekView ? 'bg-blue-700 text-white' : 'bg-white text-blue-700'}`}
            >
            Week
            </button>

        </div>
    </section> 
    <div className='p-5 '>
       {isToggleMonthWeekView ? <CommonCalendar /> : <WeekCalendar/>}
    </div>
    </>
  )
}

export default Header