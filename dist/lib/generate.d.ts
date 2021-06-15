import { TimeCountingCalculate, TimeCountingMessage } from "../types";
declare const generate: (calcTime: number, lang: "en" | "ko", calculate: TimeCountingCalculate, message: TimeCountingMessage) => string;
export default generate;
