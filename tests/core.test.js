const lankaNIC = require("../");

// These NIC numbers are randomly generated.
// Any resemblance to that of an actual person's is purely coincidental.
const NIC1 = "925182566V";
const NIC2 = "951484366V";

describe("NIC (Female - 1992.01.18)", () => {
  test("should return correct type for date of birth", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC1);
    expect(dateOfBirth).toBeInstanceOf(Date);
  });

  test("should return correct type for gender", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC1);
    expect(typeof gender).toBe("string");
  });

  test("should return correct response for gender", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC1);
    expect(gender).toBe("female");
  });

  test("should return correct response for date of birth", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC1);
    expect(dateOfBirth).toEqual(new Date("1992-01-18"));
  });
});

describe("NIC (Male - 1995.05.27)", () => {
  test("should return correct type for date of birth", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC2);
    expect(dateOfBirth).toBeInstanceOf(Date);
  });

  test("should return correct type for gender", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC2);
    expect(typeof gender).toBe("string");
  });

  test("should return the correct gender for the NIC number", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC2);
    expect(gender).toBe("male");
  });

  test("should return correct response for date of birth", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC2);
    expect(dateOfBirth).toEqual(new Date("1995-05-27"));
  });
});
