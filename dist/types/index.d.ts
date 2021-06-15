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
export interface TimeCountingCalculate {
    justNow: number;
    second: number;
    minute: number;
    hour: number;
    day: number;
    week: number;
    month: number;
}
export interface TimeCountingMessage {
    justAfter: string;
    justNow: string;
    second: string;
    minute: string;
    hour: string;
    day: string;
    week: string;
    month: string;
    year: string;
}
export declare type TimeCountingCalculateKey = "justNow" | "second" | "minute" | "hour" | "day" | "week" | "month";
export declare type TimeCountingMessageKey = "justAfter" | "justNow" | "second" | "minute" | "hour" | "day" | "week" | "month" | "year";
