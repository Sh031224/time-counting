"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (lang, time, isAfter, message, key) {
    var msg;
    if (isAfter)
        msg = lang === "en" ? " after" : " 후";
    else
        msg = lang === "en" ? " ago" : " 전";
    if (lang === "en" && time > 1) {
        msg = isAfter ? "s after" : "s ago";
    }
    return "" + time + message[key] + msg;
});
