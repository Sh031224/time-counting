"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeConstant_1 = require("../constant/timeConstant");
var getMessage_1 = require("./getMessage");
var generate = function (calcTime, lang, calculate, message) {
    var keys = [
        "second",
        "minute",
        "hour",
        "day",
        "week",
        "month"
    ];
    var isAfter = false;
    if (calcTime < 0) {
        calcTime *= -1;
        isAfter = true;
    }
    if (calcTime < calculate.justNow * timeConstant_1.default.justNow) {
        var msg = lang === "en" ? "" : isAfter ? " 후" : " 전";
        return "" + (isAfter ? message.justAfter : message.justNow) + msg;
    }
    for (var i = 0; i < keys.length; i++) {
        if (calcTime < calculate[keys[i]] * timeConstant_1.default[keys[i]]) {
            var time = Math.floor(calcTime / timeConstant_1.default[keys[i]]);
            return getMessage_1.default(lang, time, isAfter, message, keys[i]);
        }
    }
    return "" + getMessage_1.default(lang, Math.floor(calcTime / timeConstant_1.default.year), isAfter, message, "year");
};
exports.default = generate;
