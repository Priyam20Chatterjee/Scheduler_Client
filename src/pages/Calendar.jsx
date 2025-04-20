import React from 'react'
import LeftNav from '../components/shared/LeftNav'
import TopNav from '../components/shared/TopNav'
import Header from '../components/calender/Header'

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
      </div>
    </div>
  </section>
  )
}

export default Calendar