import timeConstant from "../constant/timeConstant";
import { TimeCountingCalculate, TimeCountingCalculateKey, TimeCountingMessage } from "../types";
import getMessage from "./getMessage";

const generate = (
  calcTime: number,
  lang: "en" | "ko",
  calculate: TimeCountingCalculate,
  message: TimeCountingMessage
): string => {
  const keys: Array<TimeCountingCalculateKey> = [
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month"
  ];

  let isAfter = false;

  if (calcTime < 0) {
    calcTime *= -1;
    isAfter = true;
  }

  if (calcTime < calculate.justNow * timeConstant.justNow) {
    const msg = lang === "en" ? "" : isAfter ? " 후" : " 전";

    return `${isAfter ? message.justAfter : message.justNow}${msg}`;
  }

  for (let i = 0; i < keys.length; i++) {
    if (calcTime < calculate[keys[i]] * timeConstant[keys[i]]) {
      const time = Math.floor(calcTime / timeConstant[keys[i]]);

      return getMessage(lang, time, isAfter, message, keys[i]);
    }
  }

  return `${getMessage(lang, Math.floor(calcTime / timeConstant.year), isAfter, message, "year")}`;
};

export default generate;
