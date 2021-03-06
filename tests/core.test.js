const lankaNIC = require("../index");

// These NIC numbers are randomly generated.
// Any resemblance to that of an actual person's is purely coincidental.
const NIC1 = "925182566V";
const NIC2 = "951484366V";
const NIC3 = "199251802566";
const NIC4 = "199514804366";

describe("NIC (Female - 1992.01.18)", () => {
  test("should return correct type for date of birth (old nic)", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC1);
    expect(dateOfBirth).toBeInstanceOf(Date);
  });

  test("should return correct type for date of birth (new nic)", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC3);
    expect(dateOfBirth).toBeInstanceOf(Date);
  });

  test("should return correct type for gender (old nic)", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC1);
    expect(typeof gender).toBe("string");
  });

  test("should return correct type for gender (new nic)", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC3);
    expect(typeof gender).toBe("string");
  });

  test("should return correct response for gender (old nic)", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC1);
    expect(gender).toBe("female");
  });

  test("should return correct response for gender (new nic)", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC3);
    expect(gender).toBe("female");
  });

  test("should return correct response for date of birth (old nic)", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC1);
    expect(dateOfBirth).toEqual(new Date(new Date("1992-01-18").setHours(0, 0, 0, 0)));
  });

  test("should return correct response for date of birth (new nic)", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC3);
    expect(dateOfBirth).toEqual(new Date(new Date("1992-01-18").setHours(0, 0, 0, 0)));
  });
});

describe("NIC (Male - 1995.05.27)", () => {
  test("should return correct type for date of birth (old nic)", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC2);
    expect(dateOfBirth).toBeInstanceOf(Date);
  });

  test("should return correct type for date of birth (new nic)", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC4);
    expect(dateOfBirth).toBeInstanceOf(Date);
  });

  test("should return correct type for gender (old nic)", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC2);
    expect(typeof gender).toBe("string");
  });

  test("should return correct type for gender (new nic)", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC4);
    expect(typeof gender).toBe("string");
  });

  test("should return correct response for gender (old nic)", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC2);
    expect(gender).toBe("male");
  });

  test("should return correct response for gender (new nic)", () => {
    let { gender } = lankaNIC.getInfoFromNIC(NIC4);
    expect(gender).toBe("male");
  });

  test("should return correct response for date of birth (old nic)", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC2);
    expect(dateOfBirth).toEqual(new Date(new Date("1995-05-27").setHours(0, 0, 0, 0)));
  });

  test("should return correct response for date of birth (new nic)", () => {
    let { dateOfBirth } = lankaNIC.getInfoFromNIC(NIC4);
    expect(dateOfBirth).toEqual(new Date(new Date("1995-05-27").setHours(0, 0, 0, 0)));
  });
});