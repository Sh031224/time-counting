import generate from "./lib/generate";
import { TimeCountingDate, TimeCountingOption } from "./types";

const TimeCounting = (time: TimeCountingDate, option?: TimeCountingOption) => {
  const date: Date = new Date(time);

  let today = new Date();

  let lang: "en" | "ko" = "en";

  let calculate = {
    justNow: 20,
    second: 60,
    minute: 60,
    hour: 24,
    day: 7,
    week: 4,
    month: 12
  };

  let message = {
    justAfter: "just after",
    justNow: "just now",
    second: " second",
    minute: " minute",
    hour: " hour",
    day: " day",
    week: " week",
    month: " month",
    year: " year"
  };

  if (option) {
    if (option.objectTime) {
      today = new Date(option.objectTime);
    }
    if (option.calculate) {
      calculate = { ...calculate, ...option.calculate };
    }
    if (option.lang === "ko") {
      lang = "ko";
      message = {
        justAfter: "조금",
        justNow: "방금",
        second: "초",
        minute: "분",
        hour: "시간",
        day: "일",
        week: "주",
        month: "개월",
        year: "년"
      };
    }
  }
  let calcTime = today.valueOf() - date.valueOf();

  return generate(calcTime, lang, calculate, message);
};

export default TimeCounting;
export { TimeCountingOption, TimeCountingDate };
