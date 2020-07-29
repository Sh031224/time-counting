declare type TimeCountingDate = Date | number | string;
interface TimeCountingOption {
    objectTime?: Date | string | number;
    lang?: "ko" | "en";
    calculate?: {
        justNow?: number;
        second?: number;
        minute?: number;
        hour?: number;
        day?: number;
        week?: number;
        month?: number;
    };
}
declare const _default: (time: TimeCountingDate, option?: TimeCountingOption | undefined) => string;
export default _default;
