const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 6;
    case "Tuesday":
      return 7;
    case "Wednesday":
      return 8;
    case "Thursday":
      return 8;
    case "Friday":
      return 7;
    case "Saturday":
      return 6;
    case "Sunday":
      return 10;
    default:
      return "Error : invalid day.";
  }
};

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");

// const getIdealSleepHours = idealHours => idealHours * 6

const getIdealSleepHours = () => {
  const idealHours = 9; // => Effacer si idealHours est déclarée en argurment.
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(); // => Ajouter un arg si idalHours.
  const sleepDifference = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep! ^^");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${Math.abs(sleepDifference)} hours more sleep than needed. :P`
    );
  } else {
    console.log(
      `You have ${Math.abs(
        sleepDifference
      )} hours of sleep debt. You need some rest. :)`
    );
  }
};

calculateSleepDebt(); // Correct way to call the function
