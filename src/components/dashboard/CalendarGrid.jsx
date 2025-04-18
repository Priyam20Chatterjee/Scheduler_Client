import CalendarDay from './CalendarDay';
import { isSameDay, isSameMonth } from './calendarUtils';

const CalendarGrid = ({ 
  monthData, 
  currentMonth, 
  selectedDate, 
  onDateClick, 
  events,
  onAddEvent
}) => {
  // Filter events for the current month view
  const filteredEvents = events.filter(event => 
    event.date.getMonth() === currentMonth.getMonth() &&
    event.date.getFullYear() === currentMonth.getFullYear()
  );

  // Group events by date
  const eventsByDate = {};
  filteredEvents.forEach(event => {
    const dateKey = event.date.toDateString();
    if (!eventsByDate[dateKey]) {
      eventsByDate[dateKey] = [];
    }
    eventsByDate[dateKey].push(event);
  });

  return (
    <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
      {monthData.map((day, index) => {
        const isCurrentMonth = isSameMonth(day, currentMonth);
        const isToday = isSameDay(day, new Date());
        const isSelected = selectedDate && isSameDay(day, selectedDate);
        const dateEvents = eventsByDate[day.toDateString()] || [];
        
        return (
          <CalendarDay 
            key={index}
            day={day}
            isCurrentMonth={isCurrentMonth}
            isToday={isToday}
            isSelected={isSelected}
            events={dateEvents}
            onClick={() => onDateClick(day)}
            onAddEvent={onAddEvent}
          />
        );
      })}
    </div>
  );
};

export default CalendarGrid;