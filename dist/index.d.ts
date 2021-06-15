import { TimeCountingDate, TimeCountingOption } from "./types";
declare const TimeCounting: (time: TimeCountingDate, option?: TimeCountingOption | undefined) => string;
export default TimeCounting;
export { TimeCountingOption, TimeCountingDate };
