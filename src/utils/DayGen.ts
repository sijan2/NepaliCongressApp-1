const DateAndDayGenerator = (date: Date) => {
  const day = date.getDay();
  const month = date.getMonth();
  const dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return {
    day: dayName[day],
    date: date.getDate(),
    month: monthName[month],
    year: date.getFullYear(),
  };
};

export default DateAndDayGenerator;
