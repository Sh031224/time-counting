"use strict";
import TimeCounting from "../index";

describe("#Time Counting test English", () => {
  it("time counting just after", () => {
    const day = new Date("2020-08-10 00:00:00");
    const result = "just after";
    expect(TimeCounting("2020-08-10 00:00:04", { objectTime: day })).toBe(result);
  });

  it("time counting just now", () => {
    const day = new Date("2020-08-10");
    const result = "just now";
    expect(TimeCounting("2020-08-10", { objectTime: day })).toBe(result);
  });

  it("time counting just now day", () => {
    const day = new Date("2020-08-10");
    const result = "just now";
    expect(TimeCounting("2020-08-10", { lang: "en", objectTime: day })).toBe(result);
  });

  it("time counting 1hour", () => {
    const day = new Date("2020-08-10 08:00:00");
    const result = "1 hour ago";
    expect(TimeCounting("2020-08-10 07:00:00", { objectTime: day })).toBe(result);
  });

  it("time counting 1hour after", () => {
    const day = new Date("2020-08-10 07:00:00");
    const result = "1 hour after";
    expect(TimeCounting("2020-08-10 08:00:00", { objectTime: day })).toBe(result);
  });

  it("time counting 2hours after", () => {
    const day = new Date("2020-08-10 06:00:00");
    const result = "2 hours after";
    expect(TimeCounting("2020-08-10 08:00:00", { objectTime: day })).toBe(result);
  });

  it("time counting just now 1 hour", () => {
    const day = new Date("2020-08-10 06:00:00");
    const result = "just now";
    expect(
      TimeCounting("2020-08-10 05:00:00", {
        objectTime: day,
        calculate: { justNow: 60 * 60 + 1 }
      })
    ).toBe(result);
  });

  it("time counting just now 2 hours ago", () => {
    const day = new Date("2020-08-10 07:00:00");
    const result = "2 hours ago";
    expect(
      TimeCounting("2020-08-10 05:00:00", {
        objectTime: day,
        calculate: { justNow: 60 * 60 + 1 }
      })
    ).toBe(result);
  });

  it("time counting just now 2 months ago", () => {
    const day = new Date(1591747200000);
    const result = "2 months ago";
    expect(
      TimeCounting("2020-04-10", {
        objectTime: day
      })
    ).toBe(result);
  });

  it("time counting just now 0.59 sec", () => {
    const day = new Date("2020-08-10 05:00:0.59");
    const result = "just now";
    expect(
      TimeCounting("2020-08-10 05:00:00", {
        objectTime: day
      })
    ).toBe(result);
  });
});

describe("#Time Counting test Korean", () => {
  it("time counting ko", () => {
    const day = new Date("2020-08-10");
    const result = "방금 전";
    expect(TimeCounting("2020-08-10", { lang: "ko", objectTime: day })).toBe(result);
  });
  it("time counting ko 1hour", () => {
    const day = new Date("2020-08-10 08:00:00");
    const result = "1시간 전";
    expect(
      TimeCounting("2020-08-10 07:00:00", {
        lang: "ko",
        objectTime: day
      })
    ).toBe(result);
  });

  it("time counting ko 1hour after", () => {
    const day = new Date("2020-08-10 07:00:00");
    const result = "1시간 후";
    expect(
      TimeCounting("2020-08-10 08:00:00", {
        lang: "ko",
        objectTime: day
      })
    ).toBe(result);
  });

  it("time counting ko 2hours after", () => {
    const day = new Date("2020-08-10 06:00:00");
    const result = "2시간 후";
    expect(
      TimeCounting("2020-08-10 08:00:00", {
        lang: "ko",
        objectTime: day
      })
    ).toBe(result);
  });

  it("time counting ko just now 1 hour", () => {
    const day = new Date("2020-08-10 06:00:00");
    const result = "방금 전";
    expect(
      TimeCounting("2020-08-10 05:00:00", {
        lang: "ko",
        objectTime: day,
        calculate: { justNow: 60 * 60 + 1 }
      })
    ).toBe(result);
  });

  it("time counting ko just now 2 hours ago", () => {
    const day = new Date("2020-08-10 07:00:00");
    const result = "2시간 전";
    expect(
      TimeCounting("2020-08-10 05:00:00", {
        lang: "ko",
        objectTime: day,
        calculate: { justNow: 60 * 60 + 1 }
      })
    ).toBe(result);
  });

  it("time counting ko just now 2 months ago", () => {
    const day = new Date("2020-06-10");
    const result = "2개월 전";
    expect(
      TimeCounting("2020-04-10", {
        lang: "ko",
        objectTime: day
      })
    ).toBe(result);
  });

  it("time counting ko just now 0.59 sec", () => {
    const day = new Date("2020-08-10 05:00:0.59");
    const result = "방금 전";
    expect(
      TimeCounting("2020-08-10 05:00:00", {
        lang: "ko",
        objectTime: day
      })
    ).toBe(result);
  });
});
