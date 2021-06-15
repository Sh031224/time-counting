import { TimeCountingMessageKey, TimeCountingMessage } from "../types";

export default (
  lang: "en" | "ko",
  time: number,
  isAfter: boolean,
  message: TimeCountingMessage,
  key: TimeCountingMessageKey
) => {
  let msg: string;

  if (isAfter) msg = lang === "en" ? " after" : " 후";
  else msg = lang === "en" ? " ago" : " 전";

  if (lang === "en" && time > 1) {
    msg = isAfter ? "s after" : "s ago";
  }

  return `${time}${message[key]}${msg}`;
};
