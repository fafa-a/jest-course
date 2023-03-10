export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerService = (arg: string) => void;

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCb(arg: string, callback: LoggerService) {
  if (!arg) {
    callback("Invalid argument");
    return;
  }
  callback(`Called function with ${arg}`);

  return arg.toUpperCase();
}

export class OtherStringUtils {
  private callExternalService() {
    console.log("Calling external service...");
  }

  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }
}
