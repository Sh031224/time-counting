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
    var calc = today.valueOf() - date.valueOf();
    if (59000 >= calc && -59000 <= calc) {
        var msg = lang === "en" ? "" : " 전";
        return "" + message.justNow + msg;
    }
    if (calc < 0) {
        calc *= -1;
        if (calc < calculate.justNow * 1000) {
            var msg = lang === "en" ? "" : " 후";
            return "" + message.justNow + msg;
        }
        else if (calc < calculate.second * 1000) {
            var time_1 = Math.floor(calc / 1000);
            var msg = lang === "en" && time_1 > 1 ? "s after" : lang === "en" ? " after" : " 후";
            return "" + time_1 + message.second + msg;
        }
        else if (calc < 60 * calculate.minute * 1000) {
            var time_2 = Math.floor(calc / 1000 / 60);
            var msg = lang === "en" && time_2 > 1 ? "s after" : lang === "en" ? " after" : " 후";
            return "" + time_2 + message.minute + msg;
        }
        else if (calc < 60 * 60 * calculate.hour * 1000) {
            var time_3 = Math.floor(calc / 1000 / 60 / 60);
            var msg = lang === "en" && time_3 > 1 ? "s after" : lang === "en" ? " after" : " 후";
            return "" + time_3 + message.hour + msg;
        }
        else if (calc < 60 * 60 * 24 * calculate.day * 1000) {
            var time_4 = Math.floor(calc / 1000 / 60 / 60 / 24);
            var msg = lang === "en" && time_4 > 1 ? "s after" : lang === "en" ? " after" : " 후";
            return "" + time_4 + message.day + msg;
        }
        else if (calc < 60 * 60 * 24 * 7 * calculate.week * 1000) {
            var time_5 = Math.floor(calc / 1000 / 60 / 60 / 24 / 7);
            var msg = lang === "en" && time_5 > 1 ? "s after" : lang === "en" ? " after" : " 후";
            return "" + time_5 + message.week + msg;
        }
        else if (calc < 60 * 60 * 24 * 7 * 4 * calculate.month * 1000) {
            var time_6 = Math.floor(calc / 1000 / 60 / 60 / 24 / 7 / 4);
            var msg = lang === "en" && time_6 > 1 ? "s after" : lang === "en" ? " after" : " 후";
            return "" + time_6 + message.month + msg;
        }
        else {
            var time_7 = Math.floor(calc / 1000 / 60 / 60 / 24 / 7 / 4 / 12);
            var msg = lang === "en" && time_7 > 1 ? "s after" : lang === "en" ? " after" : " 후";
            return "" + time_7 + message.year + msg;
        }
    }
    else {
        if (calc < calculate.justNow * 1000) {
            var msg = lang === "en" ? "" : " 전";
            return "" + message.justNow + msg;
        }
        else if (calc < calculate.second * 1000) {
            var time_8 = Math.floor(calc / 1000);
            var msg = lang === "en" && time_8 > 1 ? "s ago" : lang === "en" ? " ago" : " 전";
            return "" + time_8 + message.second + msg;
        }
        else if (calc < 60 * calculate.minute * 1000) {
            var time_9 = Math.floor(calc / 1000 / 60);
            var msg = lang === "en" && time_9 > 1 ? "s ago" : lang === "en" ? " ago" : " 전";
            return "" + time_9 + message.minute + msg;
        }
        else if (calc < 60 * 60 * calculate.hour * 1000) {
            var time_10 = Math.floor(calc / 1000 / 60 / 60);
            var msg = lang === "en" && time_10 > 1 ? "s ago" : lang === "en" ? " ago" : " 전";
            return "" + time_10 + message.hour + msg;
        }
        else if (calc < 60 * 60 * 24 * calculate.day * 1000) {
            var time_11 = Math.floor(calc / 1000 / 60 / 60 / 24);
            var msg = lang === "en" && time_11 > 1 ? "s ago" : lang === "en" ? " ago" : " 전";
            return "" + time_11 + message.day + msg;
        }
        else if (calc < 60 * 60 * 24 * 7 * calculate.week * 1000) {
            var time_12 = Math.floor(calc / 1000 / 60 / 60 / 24 / 7);
            var msg = lang === "en" && time_12 > 1 ? "s ago" : lang === "en" ? " ago" : " 전";
            return "" + time_12 + message.week + msg;
        }
        else if (calc < 60 * 60 * 24 * 7 * 4 * calculate.month * 1000) {
            var time_13 = Math.floor(calc / 1000 / 60 / 60 / 24 / 7 / 4);
            var msg = lang === "en" && time_13 > 1 ? "s ago" : lang === "en" ? " ago" : " 전";
            return "" + time_13 + message.month + msg;
        }
        else {
            var time_14 = Math.floor(calc / 1000 / 60 / 60 / 24 / 7 / 4 / 12);
            var msg = lang === "en" && time_14 > 1 ? "s ago" : lang === "en" ? " ago" : " 전";
            return "" + time_14 + message.year + msg;
        }
    }
};
exports.default = TimeCounting;
