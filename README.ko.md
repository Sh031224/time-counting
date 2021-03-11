# time-counting

[![Travis ci](https://travis-ci.org/Sh031224/time-counting.svg?branch=master)](https://travis-ci.org/github/Sh031224/time-counting)
[![Github issues](https://img.shields.io/github/issues/Sh031224/time-counting)](https://github.com/Sh031224/time-counting/)
[![Githug stars](https://img.shields.io/github/stars/Sh031224/time-counting)](https://github.com/Sh031224/time-counting/)
[![Github license](https://img.shields.io/github/license/Sh031224/time-counting)](https://github.com/Sh031224/time-counting/)
[![Downloads](https://img.shields.io/npm/dy/time-counting)](https://www.npmjs.com/package/time-counting)
[![Npm version](https://img.shields.io/npm/v/time-counting)](https://www.npmjs.com/package/time-counting)
<br/>
📦 오늘로부터 해당 날짜가 며칠 전인지, 며칠 후인지 알 수 있도록 해주는 패키지입니다.

[English](https://github.com/Sh031224/time-counting/blob/master/README.md)

## 설치

npm 혹은 yarn 으로 설치 할 수 있습니다.

npm

```sh
$ npm install time-counting --save
```

```sh
$ yarn add time-counting
```

## 사용 방법

### Javascript

```javascript
// es5
const TimeCounting = require("time-counting");
const time = TimeCounting("2020-08-10");
const timecount = TimeCounting("2020-08-10 08:00:00", {
  objectTime: "2020-08-10 10:00:00"
});

//es6
import TimeCounting from "time-counting";
console.log(TimeCounting("2020-08-10"));
console.log(
  TimeCounting("2020-08-10 08:00:00", {
    objectTime: "2020-08-10 10:00:00",
    lang: "ko"
  })
);
```

```sh
오늘을 기준으로 2020년 8월 10일이 며칠 전/후 인지 결과로 나타납니다.
두 번째 결과는 2020년 8월 10일 10시를 기준으로 2020년 8월 10일 8시의 시간을 확인합니다.

2시간 전
```

### TypeScript

```typescript
import TimeCounting from "time-counting";
console.log(TimeCounting("2020-08-10", { objectTime: "2020-08-11", lang: "ko" }));
```

```sh
1일 전
```

## 옵션

|    Name    |        Value         |  default   |                 description                  |
| :--------: | :------------------: | :--------: | :------------------------------------------: |
| objectTime | Date, string, number | new Date() |           기준이 되는 시간입니다.            |
|    lang    |      "ko", "en"      |    "en"    |                     언어                     |
| calculate  |      Calculate       | Calculate  | 해당 값까지 초/분/시간/일 ... 을 출력합니다. |

### Calculate

|  Name   | Value  | default |  Unit  |
| :-----: | :----: | :-----: | :----: |
| justNow | number |   20    | second |
| second  | number |   60    | second |
| minute  | number |   60    | minute |
|  hour   | number |   24    |  hour  |
|   day   | number |    7    |  day   |
|  week   | number |    4    |  week  |
|  month  | number |   12    | month  |

## 예시

```javascript
const option = {
  objectTime: "2020-08-10 06:00:00",
  lang: "ko",
  calculate: {
    justNow: 3601
  }
};
console.log(TimeCounting("2020-08-10 05:00:00", option));
```

```sh
방금 전
```

💬 1시간 1초까지는 "방금 전" 으로 표시됩니다.

## Testing

```sh
npm run test
```
