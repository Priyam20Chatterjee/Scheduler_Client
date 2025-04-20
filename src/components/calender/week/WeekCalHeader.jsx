import { format } from 'date-fns'

const CalendarHeader = ({ startDate, endDate, onPreviousWeek, onNextWeek, onToday }) => {
  const dateRange = `${format(startDate, 'MMMM d')} - ${format(endDate, 'MMMM d, yyyy')}`

  return (
    <div className="p-4 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <button 
          className="nav-button" 
          onClick={onPreviousWeek}
          aria-label="Previous week"
        >
          <ChevronLeftIcon />
        </button>
        <h2 className="text-lg font-medium px-2 py-1 rounded-md bg-gray-100 text-gray-800">
          {dateRange}
        </h2>
        <button 
          className="nav-button" 
          onClick={onNextWeek}
          aria-label="Next week"
        >
          <ChevronRightIcon />
        </button>
      </div>
      <button 
        className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-1 rounded-lg text-sm font-medium transition-colors duration-200"
        onClick={onToday}
      >
        Today
      </button>
    </div>
  )
}

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

export default CalendarHeader