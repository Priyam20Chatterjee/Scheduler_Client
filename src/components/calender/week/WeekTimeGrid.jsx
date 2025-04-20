import { format } from 'date-fns'

const WeekTimeGrid = ({ timeSlots }) => {
  return (
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
  )
}

export default WeekTimeGrid