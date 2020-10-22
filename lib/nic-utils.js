let getInfoFromNIC = nicNumber => {
  //  NIC Numbers have 10 characters
  if (nicNumber.length > 12) {
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
  // check if this nic number doesn't match the old for the new format
  const nicRegex = /^\d{9}([VX]|\d{3})$/;
  if (!nicRegex) {
    return false;
  }

  // if this is an old nic, convert to the new format.
  let nic = nicNumber;
  if (/^\d{9}[VX]$/.test(nicNumber)) {
    nic = _getNewNIC(nicNumber);
  }

  // The value is the number of days since the 1st of January.
  let noOfDays = nic.substring(4, 7);
  // If the holder is female, 500 is added to the days of the holder's birth.
  if (noOfDays > 500) {
    noOfDays -= 500;
  }
  // Check if the value falls between the number of days in a year.
  if (noOfDays >= 0 && noOfDays <= 365) {
    return true;
  } else {
    return false;
  }
};

let _getGender = nicNumber => {
  // if this is an old nic, convert to the new format.
  let nic = nicNumber;
  if (/^\d{9}[VX]$/.test(nicNumber)) {
    nic = _getNewNIC(nicNumber);
  }
  // In the case of the female holder, 500 is added to the days of the holder's
  // birth, so if the value is more than 500, we can assume that the holder is
  // female.
  let date = nic.substring(4, 7);
  if (date > 500) {
    return "female";
  } else {
    return "male";
  }
};

let _getDate = nicNumber => {

  // create a new date for the dob.
  const dateOfBirth = new Date();
  // set dateOfBirth month to January
  dateOfBirth.setMonth(0);
  // set time to 0 (this is irrelevant. added for tests)
  dateOfBirth.setHours(0, 0, 0, 0);

  // if this is an old nic, convert to the new format.
  let nic = nicNumber;
  if (/^\d{9}[VX]$/.test(nicNumber)) {
    nic = _getNewNIC(nicNumber);
  }
  // set birth year
  const fullYear = parseInt(nic.substring(0, 4));
  dateOfBirth.setFullYear(fullYear);

  // The value is the number of days since the 1st of January.
  let noOfDays = parseInt(nic.substring(4, 7));
  if (noOfDays > 500) {
    // since 500 days are added if nic belong to a female, reduce that.
    noOfDays -= 500;
  }

  // set number of days for dateOfBirth
  // this will automatically set the month and day
  if (fullYear % 4 !== 0 && noOfDays > 60) {
    // for non leap years (-1 day from no of days)
    dateOfBirth.setDate(noOfDays - 1);
  } else {
    // for leap years
    dateOfBirth.setDate(noOfDays);
  }


  return dateOfBirth;
};

let _getNewNIC = oldNIC => {
  // check if nic doesn't match the old format
  const oldNicRegex = /^\d{9}[VX]$/;
  if (!oldNicRegex) {
    throw new Error("NIC Number is not in the old format!.");
  }

  // create new nic number with 12 digits 
  return "19" + oldNIC.substring(0, 5) + "0" + oldNIC.substring(5, 9);
};

module.exports = {
  getInfoFromNIC,
  _validateNIC,
  _getDate,
  _getGender
};
