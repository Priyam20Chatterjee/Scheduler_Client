import React from 'react'
import { Navigate, useNavigate } from 'react-router';
import { useState } from 'react'
import { FaRegClock } from "react-icons/fa6";
import { BiHome } from "react-icons/bi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdAddTask } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const LeftNav = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Dashboard")
  
  return (
       <div className='border-r border-gray-400 h-screen overflow-hidden'>
              <div className='pt-6 pl-3 flex items-center gap-2 pb-6 border-b-1 border-gray-400 w-full'>
                  <h2 className='text-black text-2xl font-bold '>AI-Schedular</h2>
                  <FaRegClock className='text-purple-700' size={25}/>
              </div>
              <section className='mt-5'>
                     <button className={`flex justify-start items-center gap-2 ml-4 text-black text-lg font-medium rounded-lg hover:bg-gray-200 w-[250px] h-[50px] pl-2 ${selected === "dashboard" && "bg-gray-200 rounded-lg"}`} onClick={() => {setSelected("Dashboard"); navigate("/")}}><BiHome className='text-purple-700' size={20}/>Dashboard</button>

                     <button className={`flex items-center gap-2 ml-4 text-black text-lg font-medium hover:bg-gray-200 w-[250px] h-[50px] pl-2 ${selected === "tasks" && "bg-gray-200 rounded-lg"}`} onClick={() => {setSelected("Tasks"); navigate("/tasks")}}><MdAddTask className='text-purple-700' size={20}/>Tasks</button>

                     <button className={`flex items-center gap-2 ml-4 text-black text-lg font-medium hover:bg-gray-200 w-[250px] h-[50px] pl-2 ${selected === "Calender" && "bg-gray-200 rounded-lg"}`} onClick={() => {setSelected("Calendar"); navigate("/calender")}}><IoCalendarNumberOutline className='text-purple-700' size={20}/>Calendar</button>

                     <button className={`flex items-center gap-2 ml-4 text-black text-lg font-medium hover:bg-gray-200 w-[250px] h-[50px] pl-2 ${selected === "Completed" && "bg-gray-200 rounded-lg"}`} onClick={() => {setSelected("Completed"); navigate("/completed")}}><MdDoneAll className='text-purple-700' size={20}/>Completed</button>

                     <button className='flex items-center gap-2 ml-4 text-black text-lg hover:bg-gray-200 font-medium w-[250px] h-[50px] pl-2'><IoSettingsOutline className='text-purple-700' size={20}/>Settings</button>
              </section>
       </div>
  )
}

export default LeftNav 