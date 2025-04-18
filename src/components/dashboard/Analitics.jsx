import React from 'react'
import { useState, useEffect } from 'react'

const Analitics = () => {

  const getWelcomeMessage = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }

  const[dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date())
    }, 1000) 
    return () => clearInterval(interval)
  }, [])

  const formatDate = (date) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  const formatTime = (date) => { 
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
  };  


  return (
    <section>
       <div className='flex justify-between'>
              <div className='mt-5 ml-5 flex flex-col gap-2'>
                     <p className='text-black text-3xl font-semibold'>{getWelcomeMessage()}</p>
                     <h6 className='text-gray-500'>Here's an overview of your tasks and schedule.</h6>
              </div>
              <div className='mt-5 ml-5 pr-5 flex flex-col gap-2'>
                     <h1 className="text-black text-2xl font-bold tracking-wider">{formatDate(dateTime)}</h1>
                     <p className="text-gray-500 text-sm semibold tracking-wider">{formatTime(dateTime)}</p>
              </div>
       </div>
       <div className='flex '>
              <div className='border-gray-400 flex flex-col border mt-5 ml-5 w-[380px] h-[130px] shadow-sm bg-card rounded-lg'>
                     <h4 className='text-black text-sm font-medium tracking-tight p-6 pb-2'>Total Task</h4>
                     <h4 className='text-black text-2xl font-semibold tracking-tight pl-6'>0</h4>
              </div>
              <div className='border-gray-400 flex flex-col border mt-5 ml-5 w-[380px] h-[130px] shadow-sm bg-card rounded-lg'>
                     <h4 className='text-black text-sm font-medium tracking-tight p-6 pb-2'>Completed</h4>
                     <h4 className='text-black text-2xl font-semibold tracking-tight pl-6 text-green-600'>0</h4>
              </div>
              <div className='border-gray-400 flex flex-col border mt-5 ml-5 w-[380px] h-[130px] shadow-sm bg-card rounded-lg'>
                     <h4 className='text-black text-sm font-medium tracking-tight p-6 pb-2'>Pending</h4>
                     <h4 className='text-black text-2xl font-semibold tracking-tight pl-6 text-yellow-600'>0</h4>
              </div>
              <div className='border-gray-400 flex flex-col border mt-5 ml-5 w-[380px] h-[130px] shadow-sm bg-card rounded-lg'>
                     <h4 className='text-black text-sm font-medium tracking-tight p-6 pb-2'>Completion Rate</h4>
                     <h4 className='text-black text-2xl font-semibold tracking-tight pl-6'>0%</h4>       
              </div>

       </div>
    </section>
  )
}

export default Analitics