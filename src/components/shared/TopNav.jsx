import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { PiNotepadLight } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { PiMoonThin } from "react-icons/pi";

const TopNav = () => {
  return (
     <section className='w-full border-b-1 border-gray-400'>
       <div className='flex justify-end items-center gap-4 mr-5 mb-5 mt-5'>
          <CiSearch size={20}/>
   
          <button className='flex gap-2 justify-center items-center w-[130px] h-[40px] bg-purple-700 text-white font-medium rounded-lg'><IoIosAdd size={20}/> New Task</button>
          <PiNotepadLight size={20}/>
          <CiBellOn size={20}/>
          <PiMoonThin size={20}/>  
          <FaRegUser size={20}/>
       </div>
     </section>
  )
}

export default TopNav