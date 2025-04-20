// Get the days to display in a month view calendar (including days from prev/next month to fill grid)
export const getMonthData = (date) => {
       const month = date.getMonth();
       const year = date.getFullYear();
       
       // First day of the month
       const firstDayOfMonth = new Date(year, month, 1);
       
       // Last day of the month
       const lastDayOfMonth = new Date(year, month + 1, 0);
       
       // Day of the week of the first day (0-6, 0 is Sunday)
       const firstDayOfWeek = firstDayOfMonth.getDay();
       
       // Total days in the month
       const daysInMonth = lastDayOfMonth.getDate();
       
       // Calculate days from previous month to display
       const daysFromPrevMonth = firstDayOfWeek;
       
       // Calculate days from next month to display (to fill a 6-row grid)
       const totalCells = 42; // 6 rows x 7 days
       const daysFromNextMonth = totalCells - daysInMonth - daysFromPrevMonth;
       
       // Create array for all days to display
       const daysArray = [];
       
       // Add days from previous month
       const prevMonth = new Date(year, month - 1, 0);
       const prevMonthDays = prevMonth.getDate();
       
       for (let i = prevMonthDays - daysFromPrevMonth + 1; i <= prevMonthDays; i++) {
         daysArray.push(new Date(year, month - 1, i));
       }
       
       // Add days from current month
       for (let i = 1; i <= daysInMonth; i++) {
         daysArray.push(new Date(year, month, i));
       }
       
       // Add days from next month
       for (let i = 1; i <= daysFromNextMonth; i++) {
         daysArray.push(new Date(year, month + 1, i));
       }
       
       return daysArray;
     };
     
     // Check if two dates are the same day
     export const isSameDay = (date1, date2) => {
       if (!date1 || !date2) return false;
       
       return (
         date1.getDate() === date2.getDate() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getFullYear() === date2.getFullYear()
       );
     };
     
     // Check if a date is in the current month
     export const isSameMonth = (date1, date2) => {
       if (!date1 || !date2) return false;
       
       return (
         date1.getMonth() === date2.getMonth() &&
         date1.getFullYear() === date2.getFullYear()
       );
     };
     
     // Format date to display in UI
     export const formatDate = (date, format = 'short') => {
       if (!date) return '';
       
       if (format === 'short') {
         return new Intl.DateTimeFormat('en-US', { 
           month: 'short', 
           day: 'numeric' 
         }).format(date);
       }
       
       return new Intl.DateTimeFormat('en-US', { 
         month: 'long', 
         day: 'numeric',
         year: 'numeric'
       }).format(date);
     };