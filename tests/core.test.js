const lankaNIC = require("../");
const NIC = "951524255V";

describe("NIC Utilities", () => {
  test("should return correct type for date of birth", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC);
    expect(dateOfBirth).toBeInstanceOf(Date);
  });

  test("should return correct type for gender", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC);
    expect(typeof gender).toBe("string");
  });

  test("should return the correct gender for the NIC number", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC);
    expect(gender).toBe("m");
  });

  test("should return correct response for date of birth", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC);
    // In Javascript, months start from the index 0
    // https://coderwall.com/p/txgk3w/javascript-dates-month-weirdness
    // https://stackoverflow.com/questions/2552483/why-does-the-month-argument-range-from-0-to-11-in-javascripts-date-constructor
    https: expect(dateOfBirth).toEqual(new Date(1995, 5 - 1, 31));
  });
});
