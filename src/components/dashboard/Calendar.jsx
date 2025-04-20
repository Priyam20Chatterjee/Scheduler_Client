import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import { getMonthData } from './calendarUtils';

const Calendar = ({ selectedDate = new Date(), onDateSelect, events = [], onAddEvent }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthData, setMonthData] = useState([]);

  useEffect(() => {
    setMonthData(getMonthData(currentMonth));
  }, [currentMonth]);

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(today);
    onDateSelect && onDateSelect(today);
  };

  const handleDateClick = (date) => {
    onDateSelect && onDateSelect(date);
  };

  const handleAddEvent = (date, title) => {
    onAddEvent && onAddEvent(date, title);
  };

  return (
    <div className="rounded-xl shadow-xl shadow-gray-600 overflow-hidden transition-all duration-300 transform hover:shadow-2xl">
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-violet-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
            </span>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              {new Intl.DateTimeFormat('en-US', {
                month: 'long',
                year: 'numeric'
              }).format(currentMonth)}
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={goToPreviousMonth}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToToday}
              className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Today
            </button>
            <button
              onClick={goToNextMonth}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next month"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <CalendarHeader />

        <CalendarGrid
          monthData={monthData}
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={handleDateClick}
          events={events}
          onAddEvent={handleAddEvent}
        />
      </div>
    </div>
  );
};

export default Calendar;