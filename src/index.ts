type TimeCountingDate = Date | number | string;

interface TimeCountingOption {
  objectTime?: Date | string | number;
  lang?: "ko" | "en";
  calculate?: {
    JustBefore?: number;
    second?: number;
    minute?: number;
    hour?: number;
    day?: number;
    week?: number;
    month?: number;
  };
}

export default (time: TimeCountingDate, option?: TimeCountingOption) => {
  const date = new Date(time);
  let today = new Date();

  let lang = "en";

  let calculate = {
    JustBefore: 20,
    second: 60,
    minute: 60,
    hour: 24,
    day: 7,
    week: 4,
    month: 12
  };

  let message = {
    justBefore: "just now",
    second: "second",
    minute: "minute",
    hour: "hour",
    day: "day",
    week: "week",
    month: "month",
    year: "year"
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
        justBefore: "방금 전",
        second: "초 전",
        minute: "분 전",
        hour: "시간 전",
        day: "일 전",
        week: "주 전",
        month: "개월 전",
        year: "년 전"
      };
    }
  }
  const calc = today.valueOf() - date.valueOf();

  if (calc < calculate.JustBefore * 1000) {
    return `${message.justBefore}`;
  } else if (calc < calculate.second * 1000) {
    const time = Math.ceil(calc / 1000);
    return `${time}${message.second}` + lang === "en" && time > 1
      ? "s ago"
      : lang === "en"
      ? " ago"
      : "";
  } else if (calc < 60 * calculate.minute * 1000) {
    const time = Math.ceil(calc / 1000 / 60);
    return `${time}${message.minute}` + lang === "en" && time > 1
      ? "s ago"
      : lang === "en"
      ? " ago"
      : "";
  } else if (calc < 60 * 60 * calculate.hour * 1000) {
    const time = Math.ceil(calc / 1000 / 60 / 60);
    return `${time}${message.hour}` + lang === "en" && time > 1
      ? "s ago"
      : lang === "en"
      ? " ago"
      : "";
  } else if (calc < 60 * 60 * 24 * calculate.day * 1000) {
    const time = Math.ceil(calc / 1000 / 60 / 60 / 24);
    return `${time}${message.day}` + lang === "en" && time > 1
      ? "s ago"
      : lang === "en"
      ? " ago"
      : "";
  } else if (calc < 60 * 60 * 24 * 7 * calculate.week * 1000) {
    const time = Math.ceil(calc / 1000 / 60 / 60 / 24 / 7);
    return `${time}${message.week}` + lang === "en" && time > 1
      ? "s ago"
      : lang === "en"
      ? " ago"
      : "";
  } else if (calc < 60 * 60 * 24 * 7 * 4 * calculate.month * 1000) {
    const time = Math.ceil(calc / 1000 / 60 / 60 / 24 / 7 / 4);
    return `${time}${message.month}` + lang === "en" && time > 1
      ? "s ago"
      : lang === "en"
      ? " ago"
      : "";
  } else {
    const time = Math.ceil(calc / 1000 / 60 / 60 / 24 / 7 / 4 / 12);
    return `${time}${message.year}` + lang === "en" && time > 1
      ? "s ago"
      : lang === "en"
      ? " ago"
      : "";
  }
};
