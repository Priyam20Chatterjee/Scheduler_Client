import { format, addDays, isSameDay } from 'date-fns'
import WeekDayColumn from './WeekDayColumn'
import WeekTimeGrid from './WeekTimeGrid'

const WeekView = ({ startDate, selectedDate, onSelectDate, getTaskCountForDay }) => {
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(startDate, i)
    return {
      date,
      dayName: format(date, 'EEE'),
      dayNumber: format(date, 'd'),
      isToday: isSameDay(date, new Date()),
      isSelected: isSameDay(date, selectedDate),
      taskCount: getTaskCountForDay(date)
    }
  })

  // Generate timeSlots from 6:00 AM to 8:00 PM
  const timeSlots = Array.from({ length: 15 }, (_, i) => {
    const hour = i + 6
    return {
      hour,
      label: format(new Date().setHours(hour, 0, 0, 0), 'h:mm a')
    }
  })

  return (
    <div className="overflow-auto">
      <div className="flex">
        {/* Time labels column */}
        <div className="w-20 flex-shrink-0">
          <div className="h-20 border-b border-gray-100"></div>
          {timeSlots.map((slot) => (
            <div key={slot.hour} className="time-slot border-b border-gray-100">
              <div className="time-indicator pl-4">
                {format(new Date().setHours(slot.hour, 0, 0, 0), 'h:mm a')}
              </div>
            </div>
          ))}
        </div>

        {/* Day columns */}
        <div className="flex-grow grid grid-cols-7">
          {days.map((day) => (
            <WeekDayColumn
              key={day.dayNumber}
              day={day}
              timeSlots={timeSlots}
              onSelectDate={() => onSelectDate(day.date)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeekView