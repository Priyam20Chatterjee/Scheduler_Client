import React from 'react'
import LeftNav from '../components/shared/LeftNav'
import TopNav from '../components/shared/TopNav'

const Completed = () => {
  return (
    <section className='flex h-screen overflow-hidden'>
    <div className='flex-[1]'>
      <LeftNav />
    </div>
    <div className='flex-[8]'>
      <div><TopNav /></div>

      <div className='overflow-y-scroll h-[calc(100vh-64px)]'>
        <h1>completed</h1>
      </div>
    </div>
  </section>

  )
}

export default Completed