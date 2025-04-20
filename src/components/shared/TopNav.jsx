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
       <div className='flex justify-between items-center gap-4 mr-5 mb-5 mt-5'>
          <h4 className='pl-3'>
            <CiSearch size={23}/>
          </h4>

          <div className='flex justify-center items-center gap-4'>
              <button className='flex gap-2 justify-center items-center w-[130px] h-[40px] bg-purple-700 text-white font-medium rounded-lg'><IoIosAdd size={20}/> New Task</button>
              <PiNotepadLight size={23}/>
              <CiBellOn size={23}/>
              <PiMoonThin size={23}/>
          </div>
   
          <FaRegUser size={23}/>
       </div>
     </section>
  )
}

export default TopNav