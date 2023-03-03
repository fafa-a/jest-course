import {
  calculateComplexity,
  toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils", () => {
  it("toUpperCaseWithCb - calls callback for invalid argument", () => {
    const actual = toUpperCaseWithCb("", () => {});
    expect(actual).toBeUndefined();
  });

  it("toUpperCaseWithCb - calls callback for valid argument", () => {
    const actual = toUpperCaseWithCb("abc", () => {});
    expect(actual).toBe("ABC");
  });

  it("Calculate complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: { Fied1: "Value1", Field2: "Value2" },
    };
    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});
