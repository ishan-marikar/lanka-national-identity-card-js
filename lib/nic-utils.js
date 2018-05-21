let getInfoFromNIC = nicNumber => {
  //  NIC Numbers have 10 characters
  if (nicNumber.length > 10) {
    throw new Error("NIC Number is too long.");
  }
  if (!_validateNIC(nicNumber)) {
    throw new Error("NIC Number doesn't seem valid.");
  }
  let gender = _getGender(nicNumber);
  let dateOfBirth = _getDate(nicNumber);
  return {
    gender,
    dateOfBirth
  };
};

// We validate the NIC by checking if we can extract the days since the holder's
// birth and if they fall between the beginning and end of the year.
let _validateNIC = nicNumber => {
  // The value are the number of days since the 1st of January.
  let date = nicNumber.substring(2, 5);
  // If the holder is female, 500 is added to the days of the holder's birth.
  if (date > 500) {
    date = date - 500;
  }
  // Check if the value falls between the number of days in a year.
  if (date >= 0 && date <= 365) {
    return true;
  } else {
    return false;
  }
};

let _getGender = nicNumber => {
  // In the case of the female holder, 500 is added to the days of the holder's
  // birth, so if the value is more than 500, we can assume that the holder is
  // female.
  let date = nicNumber.substring(2, 5);
  if (date > 500) {
    return "f";
  } else {
    return "m";
  }
};

let _getDate = nicNumber => {
  let _getYear = nicNumber => {
    // The first two characters of the NIC hold the year of birth
    let date = nicNumber.substring(0, 2);
    if (date >= 0 && date <= 29) {
      return parseInt("20" + date);
    } else if (date >= 30 || date <= 99) {
      return parseInt("19" + date);
    }
  };
  let _getDayAndMonth = nicNumber => {
    let numberOfDays = nicNumber.substring(2, 5);
    if (numberOfDays > 500) {
      numberOfDays = numberOfDays - 500;
    }
    let sumOfMonths = [31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 365];
    let index = 0;
    let month, day;
    for (let sumOfDays of sumOfMonths) {
      index++;
      if (numberOfDays <= sumOfDays) {
        month = index;
        day = numberOfDays - sumOfMonths[index - 2];
        break;
      }
    }
    return { day, month };
  };

  let { day, month } = _getDayAndMonth(nicNumber);
  let year = _getYear(nicNumber);
  // In Javascript, months start from the index 0
  // https://coderwall.com/p/txgk3w/javascript-dates-month-weirdness
  // https://stackoverflow.com/questions/2552483/why-does-the-month-argument-range-from-0-to-11-in-javascripts-date-constructor
  return new Date(year, month - 1, day, 0, 0, 0);
};

module.exports = {
  getInfoFromNIC,
  _validateNIC,
  _getDate,
  _getGender
};
