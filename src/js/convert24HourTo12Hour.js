const convert24HourTo12Hour = (number) => {
  if (number === 0) {
    return "12AM";
  } else if (number < 12) {
    return number + "AM";
  } else if (number === 12) {
    return "12PM";
  } else if (number > 12 && number < 24) {
    return number - 12 + "PM";
  } else if (number >= 24) {
    return convert24HourTo12Hour(number - 24);
  }
};
export default convert24HourTo12Hour;
