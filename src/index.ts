import { TimeCountingDate, TimeCountingOption } from "./type";

const TimeCounting = (time: TimeCountingDate, option?: TimeCountingOption) => {
  const date: Date = new Date(time);

  let today = new Date();

  let lang = "en";

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
  let calc = today.valueOf() - date.valueOf();

  if (59000 >= calc && -59000 <= calc) {
    const msg = lang === "en" ? "" : " 전";

    return `${message.justNow}${msg}`;
  }

  if (calc < 0) {
    calc *= -1;
    if (calc < calculate.justNow * 1000) {
      const msg = lang === "en" ? "" : " 후";

      return `${message.justNow}${msg}`;
    } else if (calc < calculate.second * 1000) {
      const time = Math.floor(calc / 1000);
      const msg = lang === "en" && time > 1 ? "s after" : lang === "en" ? " after" : " 후";

      return `${time}${message.second}${msg}`;
    } else if (calc < 60 * calculate.minute * 1000) {
      const time = Math.floor(calc / 1000 / 60);
      const msg = lang === "en" && time > 1 ? "s after" : lang === "en" ? " after" : " 후";

      return `${time}${message.minute}${msg}`;
    } else if (calc < 60 * 60 * calculate.hour * 1000) {
      const time = Math.floor(calc / 1000 / 60 / 60);
      const msg = lang === "en" && time > 1 ? "s after" : lang === "en" ? " after" : " 후";

      return `${time}${message.hour}${msg}`;
    } else if (calc < 60 * 60 * 24 * calculate.day * 1000) {
      const time = Math.floor(calc / 1000 / 60 / 60 / 24);
      const msg = lang === "en" && time > 1 ? "s after" : lang === "en" ? " after" : " 후";

      return `${time}${message.day}${msg}`;
    } else if (calc < 60 * 60 * 24 * 7 * calculate.week * 1000) {
      const time = Math.floor(calc / 1000 / 60 / 60 / 24 / 7);
      const msg = lang === "en" && time > 1 ? "s after" : lang === "en" ? " after" : " 후";

      return `${time}${message.week}${msg}`;
    } else if (calc < 60 * 60 * 24 * 7 * 4 * calculate.month * 1000) {
      const time = Math.floor(calc / 1000 / 60 / 60 / 24 / 7 / 4);
      const msg = lang === "en" && time > 1 ? "s after" : lang === "en" ? " after" : " 후";

      return `${time}${message.month}${msg}`;
    } else {
      const time = Math.floor(calc / 1000 / 60 / 60 / 24 / 7 / 4 / 12);
      const msg = lang === "en" && time > 1 ? "s after" : lang === "en" ? " after" : " 후";

      return `${time}${message.year}${msg}`;
    }
  } else {
    if (calc < calculate.justNow * 1000) {
      const msg = lang === "en" ? "" : " 전";

      return `${message.justNow}${msg}`;
    } else if (calc < calculate.second * 1000) {
      const time = Math.floor(calc / 1000);
      const msg = lang === "en" && time > 1 ? "s ago" : lang === "en" ? " ago" : " 전";

      return `${time}${message.second}${msg}`;
    } else if (calc < 60 * calculate.minute * 1000) {
      const time = Math.floor(calc / 1000 / 60);
      const msg = lang === "en" && time > 1 ? "s ago" : lang === "en" ? " ago" : " 전";

      return `${time}${message.minute}${msg}`;
    } else if (calc < 60 * 60 * calculate.hour * 1000) {
      const time = Math.floor(calc / 1000 / 60 / 60);
      const msg = lang === "en" && time > 1 ? "s ago" : lang === "en" ? " ago" : " 전";

      return `${time}${message.hour}${msg}`;
    } else if (calc < 60 * 60 * 24 * calculate.day * 1000) {
      const time = Math.floor(calc / 1000 / 60 / 60 / 24);
      const msg = lang === "en" && time > 1 ? "s ago" : lang === "en" ? " ago" : " 전";

      return `${time}${message.day}${msg}`;
    } else if (calc < 60 * 60 * 24 * 7 * calculate.week * 1000) {
      const time = Math.floor(calc / 1000 / 60 / 60 / 24 / 7);
      const msg = lang === "en" && time > 1 ? "s ago" : lang === "en" ? " ago" : " 전";

      return `${time}${message.week}${msg}`;
    } else if (calc < 60 * 60 * 24 * 7 * 4 * calculate.month * 1000) {
      const time = Math.floor(calc / 1000 / 60 / 60 / 24 / 7 / 4);
      const msg = lang === "en" && time > 1 ? "s ago" : lang === "en" ? " ago" : " 전";

      return `${time}${message.month}${msg}`;
    } else {
      const time = Math.floor(calc / 1000 / 60 / 60 / 24 / 7 / 4 / 12);
      const msg = lang === "en" && time > 1 ? "s ago" : lang === "en" ? " ago" : " 전";

      return `${time}${message.year}${msg}`;
    }
  }
};

export default TimeCounting;
export { TimeCountingOption, TimeCountingDate };
