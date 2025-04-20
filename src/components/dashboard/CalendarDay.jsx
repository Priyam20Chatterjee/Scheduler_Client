import { useState } from 'react';
import CalendarEvent from './CalendarEvent';

const CalendarDay = ({
  day,
  isCurrentMonth,
  isToday,
  isSelected,
  events = [],
  onClick,
  onAddEvent
}) => {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventTitle, setEventTitle] = useState('');

  const handleClick = () => {
    onClick(day);
  };

  const handleDoubleClick = () => {
    setShowAddEvent(true);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (eventTitle.trim()) {
      onAddEvent(day, eventTitle);
      setEventTitle('');
      setShowAddEvent(false);
    }
  };

  const dayClasses = `
    relative h-24 sm:h-28 md:h-32 p-1 bg-white
    ${!isCurrentMonth ? 'text-gray-400' : 'text-gray-800'}
    ${isToday ? 'font-semibold' : ''}
    ${isSelected ? 'ring-2 ring-violet-200 bg-violet-50' : ''}
    ${isToday ? 'after:content-[""] after:absolute after:top-1 after:right-1 after:h-2 after:w-2 after:bg-violet-500 after:rounded-full' : ''}
    transition-colors duration-200 hover:bg-gray-50
  `;

  return (
    <div
      className={dayClasses}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="flex justify-between items-start h-full">
        <span className="text-sm">{day.getDate()}</span>
        <div className="flex-1 max-h-full overflow-y-auto">
          {events.length > 0 && (
            <div className="mt-1 space-y-1">
              {events.map((event) => (
                <CalendarEvent key={event.id} event={event} />
              ))}
            </div>
          )}

          {showAddEvent && (
            <form onSubmit={handleAddEvent} className="mt-1">
              <input
                type="text"
                className="w-full text-xs p-1 border border-gray-300 rounded"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                placeholder="Add event..."
                autoFocus
                onClick={(e) => e.stopPropagation()}
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarDay;