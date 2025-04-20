import { useRef, useState } from 'react'
import WeekTaskIndicator from './WeekTaskIndicator'

const WeekDayColumn = ({ day, timeSlots, onSelectDate }) => {
  const [isHovered, setIsHovered] = useState(false)
  const columnRef = useRef(null)

  const handleClick = () => {
    onSelectDate()
  }

  return (
    <div 
      ref={columnRef}
      className={`day-column ${day.isSelected ? 'bg-purple-50' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Day header */}
      <div className={`
        day-header border-b border-gray-100
        transition-colors duration-200
        ${isHovered && !day.isSelected ? 'bg-gray-50' : ''}
      `}>
        <div className="font-medium text-gray-500">{day.dayName}</div>
        <div className={`day-number mt-1 ${day.isToday ? 'current-day' : ''}`}>
          {day.dayNumber}
        </div>
        {day.taskCount > 0 && (
          <WeekTaskIndicator count={day.taskCount} />
        )}
      </div>

      {/* Time slots */}
      {timeSlots.map((timeSlot) => (
        <div 
          key={timeSlot.hour} 
          className="time-slot border-b border-gray-100"
        >
          {/* This is where events would be rendered */}
        </div>
      ))}
    </div>
  )
}

export default WeekDayColumn