import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return uppercase of a valid string", () => {
    // Arrange
    // sut = System Under Test
    const sut = toUpperCase;
    const expected = "ABC";

    // Act
    const actual = sut("abc");

    // Assert
    expect(actual).toBe(expected);
  });

  describe.only("toUpperCase examples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-string", expected: "MY-STRING" },
      { input: "def", expected: "DEF" },
    ])("$input should return $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for arg My-string should", () => {
    test("return right length", () => {
      const actual = getStringInfo("My-string");

      expect(actual.characters).toHaveLength(9);
    });

    test("return right lowerCase", () => {
      const actual = getStringInfo("My-string");

      expect(actual.lowerCase).toBe("my-string");
    });

    test("return right upperCase", () => {
      const actual = getStringInfo("My-string");

      expect(actual.upperCase).toBe("MY-STRING");
    });

    test("return right characters", () => {
      const actual = getStringInfo("My-string");

      expect(actual.characters).toEqual([
        "M",
        "y",
        "-",
        "s",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);

      expect(actual.characters).toContain<string>("M");
      expect(actual.characters).toEqual(
        expect.arrayContaining(["t", "r", "i", "n", "g", "M", "y", "-", "s"])
      );
    });

    test("return defined extraInfo", () => {
      const actual = getStringInfo("My-string");

      expect(actual.extraInfo).toBeDefined();
    });

    test("return right extraInfo", () => {
      const actual = getStringInfo("My-string");

      expect(actual.extraInfo).toEqual({});
    });
  });
});
