let getInfoFromNIC = nicNumber => {
  //  NIC Numbers have maximum 12 characters
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

// We first validate the NIC using regex and then checking if we can extract 
// the days since the holder's birth and if they fall between the beginning and end of the year.
let _validateNIC = nicNumber => {
  // check with regex
  if (!/^([\d]{9}(\V|\X))$|^([\d]{12})$/.test(nicNumber)) return false;
  // update old NIC formats to match the new format
  nicNumber = _getNewNICnumber(nicNumber);

  // The value are the number of days since the 1st of January.
  let noOfDays = parseInt(nicNumber.substring(4, 7));

  // for female nic numbers
  if (noOfDays > 500) noOfDays -= 500;

  // Check if the value falls between the number of days in a year.
  if (noOfDays >= 0 && noOfDays <= 366) {
    return true;
  } else {
    return false;
  }
};

let _getGender = nicNumber => {
  // update old NIC formats to match the new format
  nicNumber = _getNewNICnumber(nicNumber);
  // In the case of the female holder, 500 is added to the days of the holder's
  // birth, so if the value is more than 500, we can assume that the holder is
  // female.
  // get number of days from new nic
  let noOfDays = parseInt(nicNumber.substring(4, 7));

  if (noOfDays > 500) {
    return "female";
  } else {
    return "male";
  }
};

let _getDate = nicNumber => {
  // update old NIC formats to match the new format
  nicNumber = _getNewNICnumber(nicNumber);

  // get number of days from new nic
  let noOfDays = parseInt(nicNumber.substring(4, 7));

  // for female nic numbers
  if (noOfDays > 500) noOfDays -= 500;

  // create a new date for ThisYear-January-Today
  const birthDate = new Date();
  birthDate.setMonth(0);

  // set year of birthDate
  const fullYear = parseInt(nicNumber.substring(0, 4));
  birthDate.setFullYear(fullYear);

  //set number of days for birthDate
  //NOTE: This will automatically set the month and day
  if (fullYear % 4 !== 0 && noOfDays > 60) {
    birthDate.setDate(noOfDays - 1);
  } else {
    birthDate.setDate(noOfDays);
  }

  return birthDate;
};

let _getNewNICnumber = nicNumber => {
  // update old NIC formats to match the new format
  if (/^\d{9}[VX]$/.test(nicNumber)) {
    nicNumber = "19" + nicNumber.substring(0, 5) + "0" + nicNumber.substring(5, 9);
  }

  return nicNumber;
}

module.exports = {
  getInfoFromNIC,
  _validateNIC,
  _getDate,
  _getGender
};
