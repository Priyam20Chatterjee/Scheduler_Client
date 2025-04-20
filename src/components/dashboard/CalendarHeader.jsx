const CalendarHeader = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="grid grid-cols-7 mb-1 text-center">
      {daysOfWeek.map((day) => (
        <div key={day} className="py-2">
          <span className="text-sm font-medium text-gray-500">{day}</span>
        </div>
      ))}
    </div>
  );
};

export default CalendarHeader;