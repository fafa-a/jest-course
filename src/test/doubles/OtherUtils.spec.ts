import { calculateComplexity } from "../../app/doubles/OtherUtils";

describe("OtherUtils", () => {
  it("Calculate complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: { Fied1: "Value1", Field2: "Value2" },
    };
    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});
