import { getStringInfo, toUpperCase, StringUtils } from "../app/Utils";

describe("Utils test suite", () => {
  describe.only("StringUtils", () => {
    let sut: StringUtils;
    beforeEach(() => {
      sut = new StringUtils();
    });

    it("Should return correct uppercase", () => {
      const actual = sut.toUpperCase("abc");

      expect(actual).toBe("ABC");
    });

    it("Should throw error when arg is null or undefined - function", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }
      expect(expectError).toThrowError();
      expect(expectError).toThrowError("arg is null or undefined!");
    });

    it("Should throw error when arg is null or undefined - arrow function", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrowError("arg is null or undefined!");
    });

    it.only("Should throw error when arg is null or undefined - try catch block", () => {
      try {
        sut.toUpperCase("");
        fail("Should have thrown an error!");
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
        expect(e).toHaveProperty("message", "arg is null or undefined!");
      }
    });
  });
});
