import { milliSecondToSecondConversionRate } from "../constants";

export const secondsToMilliSeconds = (seconds: number): number => {
  return seconds * milliSecondToSecondConversionRate;
};

export const formatCamelCaseToIndividualWords = (camelCaseWord?: string) => {
  if (camelCaseWord) {
    return camelCaseWord.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase();
  }
  return "";
};

export const formatNumberToShortForm = (num: number) => {
  let formattedNum;

  switch (true) {
    case num >= 1000000000:
      formattedNum = (num / 1000000000).toFixed(0) + "B";
      break;
    case num >= 1000000:
      formattedNum = (num / 1000000).toFixed(0) + "M";
      break;
    case num >= 1000:
      formattedNum = (num / 1000).toFixed(0) + "K";
      break;
    default:
      formattedNum = num.toString();
  }

  return formattedNum;
};
