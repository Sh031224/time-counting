"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var generate_1 = require("./lib/generate");
var TimeCounting = function (time, option) {
    var date = new Date(time);
    var today = new Date();
    var lang = "en";
    var calculate = {
        justNow: 20,
        second: 60,
        minute: 60,
        hour: 24,
        day: 7,
        week: 4,
        month: 12
    };
    var message = {
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
            calculate = __assign(__assign({}, calculate), option.calculate);
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
    var calcTime = today.valueOf() - date.valueOf();
    return generate_1.default(calcTime, lang, calculate, message);
};
exports.default = TimeCounting;
