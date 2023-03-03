import { OtherStringUtils } from "../../app/doubles/OtherUtils";

describe("OtherUtils", () => {
  describe("OtherStringUtils tests with spieces", () => {
    let sut: OtherStringUtils;
    beforeEach(() => {
      sut = new OtherStringUtils();
    });

    test("Use a spy to track calls", () => {
      const toUpperCaseSpy = jest.spyOn(sut, "toUpperCase");
      sut.toUpperCase("abc");
      expect(toUpperCaseSpy).toBeCalledWith("abc");
    });

    test("Use a spy to track calls to other modules", () => {
      const consoleLogSpy = jest.spyOn(console, "log");
      sut.logString("abc");
      expect(consoleLogSpy).toBeCalledWith("abc");
    });

    test("Use a spy to replace the implementation of a method", () => {
      jest.spyOn(sut, "callExternalService").mockImplementation(() => {
        console.log("Mocked implementation !!!!");
      });
      sut.callExternalService();
    });
  });
});
