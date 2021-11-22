export const DateString = () => {
  const dateName = (dateNumber) => {
    const stringNumber = String(dateNumber);
    const lastNumber = stringNumber.charAt(stringNumber.length - 1);

    if (stringNumber.length === 2 && lastNumber === '0')
      return `${dateNumber}th`;

    switch (lastNumber) {
      case '1':
        return `${dateNumber}st`;
      case '2':
        return `${dateNumber}nd`;
      case '3':
        return `${dateNumber}rd`;
      default:
        return `${dateNumber}th`;
    }
  };

  const dayName = (dayNumber) => {
    switch (dayNumber) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      default:
        return 'Saturday';
    }
  };

  const monthName = (monthNumber) => {
    switch (monthNumber) {
      case 0:
        return 'Janurary';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';

      default:
        return 'December';
    }
  };
  const dateToString = (dateInfo) => {
    const date = dateInfo.getDate();
    const day = dateInfo.getDay();
    const month = dateInfo.getMonth();

    return `${dayName(day)}, ${monthName(month)} ${dateName(date)}`;
  };

  return {
    dateToString,
  };
};
