const WeekTaskIndicator = ({ count }) => {
       return (
         <div className="task-indicator animate-pulse-light">
           {count} task{count !== 1 ? 's' : ''}
         </div>
       )
     }
     
export default WeekTaskIndicator