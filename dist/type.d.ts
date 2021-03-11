export declare type TimeCountingDate = string | number | Date;
export interface TimeCountingOption {
    objectTime?: string | number | Date;
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
