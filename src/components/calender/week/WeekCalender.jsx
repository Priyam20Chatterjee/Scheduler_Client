import { useState } from 'react'
import {
  format,
  startOfWeek,
  endOfWeek,
  addWeeks,
  subWeeks,
  isSameDay,
} from 'date-fns'

const WeekCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  
  const [tasks] = useState([
    { id: 1, date: '2025-04-18', title: 'Team Meeting' },
    { id: 2, date: '2025-04-13', title: 'Review' },
  ])

  const startDate = startOfWeek(currentDate, { weekStartsOn: 0 })
  const endDate = endOfWeek(currentDate, { weekStartsOn: 0 })

  const timeSlots = Array.from({ length: 15 }, (_, i) => {
    const hour = i + 6
    return hour
  })

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    return {
      date,
      dayName: format(date, 'EEE'),
      dayNumber: format(date, 'd'),
      isToday: isSameDay(date, new Date()),
      isSelected: isSameDay(date, selectedDate)
    }
  })

  const handlePreviousWeek = () => setCurrentDate(subWeeks(currentDate, 1))
  const handleNextWeek = () => setCurrentDate(addWeeks(currentDate, 1))
  const handleToday = () => {
    setCurrentDate(new Date())
    setSelectedDate(new Date())
  }

  const getTasksForDate = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd')
    return tasks.filter(task => task.date === formattedDate)
  }

  const formatTimeSlot = (hour) => {
    return format(new Date().setHours(hour, 0, 0, 0), 'h:mm aa')
  }

  return (
    <div className="bg-white rounded-xl shadow-lg w-full max-w-7xl">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={handlePreviousWeek} className="p-2 text-gray-600 hover:text-gray-900">
            <span className="sr-only">Previous week</span>
            ‹
          </button>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <h2 className="text-lg font-medium">
              {format(startDate, 'MMMM d')} - {format(endDate, 'MMMM d, yyyy')}
            </h2>
          </div>
          <button onClick={handleNextWeek} className="p-2 text-gray-600 hover:text-gray-900">
            <span className="sr-only">Next week</span>
            ›
          </button>
        </div>
        <button 
          onClick={handleToday}
          className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Today
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="border-t border-gray-200">
        <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr_1fr_1fr_1fr] divide-x divide-gray-200">
          {/* Empty corner */}
          <div className="w-20 border-r border-gray-200" />
          
          {/* Day headers */}
          {days.map((day) => (
            <div 
              key={day.dayNumber}
              className={`p-2 text-center ${day.isSelected ? 'bg-purple-50' : ''}`}
            >
              <div className="text-sm text-gray-500">{day.dayName}</div>
              <div className={`
                mt-1 w-8 h-8 mx-auto flex items-center justify-center rounded-full
                ${day.isToday ? 'bg-purple-600 text-white' : 'text-gray-900'}
              `}>
                {day.dayNumber}
              </div>
              {getTasksForDate(day.date).length > 0 && (
                <div className="text-xs text-gray-500 mt-1">
                  {getTasksForDate(day.date).length} task
                </div>
              )}
            </div>
          ))}

          {/* Time slots */}
          {timeSlots.map((hour) => (
            <>
              <div key={hour} className="w-20 h-14 border-r border-gray-200 px-4 py-2">
                <div className="text-xs text-gray-500">{formatTimeSlot(hour)}</div>
              </div>
              {days.map((day, index) => (
                <div 
                  key={`${hour}-${index}`} 
                  className={`h-14 border-b border-gray-200 ${
                    day.isSelected ? 'bg-purple-50' : ''
                  }`} 
                />
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeekCalendar