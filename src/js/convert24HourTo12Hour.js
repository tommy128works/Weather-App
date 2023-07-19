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

const convert24TimeTo12Time = (dateString) => {
  let time = dateString.split(":");
  let hour = time[0];

  if (hour === 0) {
    return "12:" + time[1] + "AM";
  } else if (hour < 12) {
    return hour + ":" + time[1] + "AM";
  } else if (hour === 12) {
    return "12:" + time[1] + "PM";
  } else if (hour > 12 && hour < 24) {
    return (hour - 12) + ":" + time[1] + "PM";
  }
};

export { convert24HourTo12Hour, convert24TimeTo12Time };
