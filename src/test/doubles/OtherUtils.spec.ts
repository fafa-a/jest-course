import {
  calculateComplexity,
  toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils", () => {
  describe.only("Tracking callbacks with Jest mocks", () => {
    const callBackmock = jest.fn();
    afterEach(() => {
      callBackmock.mockClear();
      // jest.clearAllMocks();
    });

    it("Calls callback for invalid argument - track calls", () => {
      const actual = toUpperCaseWithCb("", callBackmock);
      expect(actual).toBeUndefined();
      expect(callBackmock).toBeCalledWith("Invalid argument");
      expect(callBackmock).toBeCalledTimes(1);
    });

    it("Calls callback for valid argument - track calls", () => {
      const actual = toUpperCaseWithCb("abc", callBackmock);
      expect(actual).toBe("ABC");
      expect(callBackmock).toBeCalledWith("Called function with abc");
      expect(callBackmock).toBeCalledTimes(1);
    });
  });
  describe("Tracking callbacks", () => {
    let cbArgs = [];
    let timesCalled = 0;

    function callBackmock(arg: string) {
      cbArgs.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      cbArgs = [];
      timesCalled = 0;
    });

    it("Calls callback for invalid argument - track calls", () => {
      const actual = toUpperCaseWithCb("", callBackmock);
      expect(actual).toBeUndefined();
      expect(cbArgs).toContain("Invalid argument");
      expect(timesCalled).toBe(1);
    });

    it("Calls callback for valid argument - track calls", () => {
      const actual = toUpperCaseWithCb("abc", callBackmock);
      expect(actual).toBe("ABC");
      expect(cbArgs).toContain("Called function with abc");
      expect(timesCalled).toBe(1);
    });
  });

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
