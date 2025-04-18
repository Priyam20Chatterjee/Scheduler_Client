const CalendarEvent = ({ event }) => {
       const colorMap = {
         blue: 'bg-blue-100 text-blue-800',
         green: 'bg-green-100 text-green-800',
         red: 'bg-red-100 text-red-800',
         amber: 'bg-amber-100 text-amber-800',
         purple: 'bg-purple-100 text-purple-800',
         indigo: 'bg-indigo-100 text-indigo-800',
       };
     
       const bgColor = colorMap[event.color] || 'bg-gray-100 text-gray-800';
     
       return (
         <div className={`px-1.5 py-0.5 rounded text-xs font-medium ${bgColor} truncate`} title={event.title}>
           <div className="flex items-center space-x-1">
             <span className="text-[10px]">{event.time}</span>
             <span className="truncate">{event.title}</span>
           </div>
         </div>
       );
     };
     
export default CalendarEvent;