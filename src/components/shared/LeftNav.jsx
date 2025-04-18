import React from 'react'
import { useState } from 'react'
import { FaRegClock } from "react-icons/fa6";
import { BiHome } from "react-icons/bi";

const LeftNav = () => {

  const [selected, setSelected] = useState("Dashboard")
  
  return (
       <div className='border-r border-gray-400 h-screen overflow-hidden'>
              <div className='pt-6 pl-3 flex items-center gap-2 pb-6 border-b-1 border-gray-400 w-full'>
                  <h2 className='text-black text-2xl font-bold '>AI-Schedular</h2>
                  <FaRegClock className='text-purple-700' size={25}/>
              </div>
              <section className='mt-5'>
                     <button className={`flex justify-start items-center gap-2 ml-4 text-black text-lg font-medium hover:bg-gray-200 w-[250px] h-[50px] ${selected === "dashboard" ? "bg-gray-200 rounded-lg" : ""}`} onClick={() => setSelected("dashboard")}><BiHome size={20}/>Dashboard</button>

                     <button className={`flex items-center gap-2 ml-4 text-black text-lg font-medium hover:bg-gray-200 w-[250px] h-[50px] ${selected === "tasks" ? "bg-gray-200 rounded-lg" : ""}`} onClick={() => setSelected("tasks")}><BiHome size={20}/>Tasks</button>

                     <button className={`flex items-center gap-2 ml-4 text-black text-lg font-medium hover:bg-gray-200 w-[250px] h-[50px] ${selected === "Calender" ? "bg-gray-200 rounded-lg" : ""}`} onClick={() => setSelected("Calender")}><BiHome size={20}/>Calender</button>

                     <button className={`flex items-center gap-2 ml-4 text-black text-lg font-medium hover:bg-gray-200 w-[250px] h-[50px] ${selected === "Completed" ? "bg-gray-200 rounded-lg" : ""}`} onClick={() => setSelected("Completed")}><BiHome size={20}/>Completed</button>

                     <button className='absolute bottom-5 flex items-center gap-2 ml-4 text-black text-lg hover:bg-gray-200 font-medium w-[250px] h-[50px]'><BiHome size={20}/>Settings</button>
              </section>
       </div>
  )
}

export default LeftNav 