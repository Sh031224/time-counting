# time-counting

[![Travis ci](https://travis-ci.org/Sh031224/time-counting.svg?branch=master)](https://travis-ci.org/github/Sh031224/time-counting)
[![Github issues](https://img.shields.io/github/issues/Sh031224/time-counting)](https://github.com/Sh031224/time-counting/)
[![Githug stars](https://img.shields.io/github/stars/Sh031224/time-counting)](https://github.com/Sh031224/time-counting/)
[![Github license](https://img.shields.io/github/license/Sh031224/time-counting)](https://github.com/Sh031224/time-counting/)
[![Downloads](https://img.shields.io/npm/dy/time-counting)](https://www.npmjs.com/package/time-counting)
[![Npm version](https://img.shields.io/npm/v/time-counting)](https://www.npmjs.com/package/time-counting)
<br/>
📦 A package that lets you know how many days before that date.

[Korean](https://github.com/Sh031224/time-counting/blob/master/README.ko.md)

## Installation

You Can install by npm

```sh
$ npm install time-counting --save
```

or yarn

```sh
$ yarn add time-counting
```

## Usage

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
console.log(TimeCounting("2020-08-10 08:00:00", { objectTime: "2020-08-10 10:00:00" }));
```

```sh
Output should be how long it is and how much is left from the current time.
2 hours ago
```

### TypeScript

```typescript
import TimeCounting from "time-counting";
console.log(TimeCounting("2020-08-10", { objectTime: "2020-08-11" }));
```

```sh
1 day ago
```

## Options

|    Name    |        Value         |  default   |                 description                 |
| :--------: | :------------------: | :--------: | :-----------------------------------------: |
| objectTime | Date, string, number | new Date() |    It is a standard time for comparison.    |
|    lang    |      "ko", "en"      |    "en"    |                  language                   |
| calculate  |      Calculate       | Calculate  | Choose how far you want the time to appear. |

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

## Example

```javascript
const option = {
  objectTime: "2020-08-10 06:00:00",
  calculate: {
    justNow: 3601
  }
};
console.log(TimeCounting("2020-08-10 05:00:00", option));
```

```sh
just now
```

💬 Up to 1 hour 1 second is displayed as "just now".

## Testing

```sh
npm run test
```
