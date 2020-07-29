# time-counting

![Github issues](https://img.shields.io/github/issues/Sh031224/time-counting)
![Github forks](https://img.shields.io/github/forks/Sh031224/time-counting)
![Githug stars](https://img.shields.io/github/stars/Sh031224/time-counting)
![Github license](https://img.shields.io/github/license/Sh031224/time-counting)
![Package version](https://img.shields.io/github/package-json/v/Sh031224/time-counting)
<br/>
📦 A package that lets you know how many days before that date.

## Installation

You Can install by npm

```sh
$ npm install time-counting --save
```

or yarn

```sh
$ yarn add mypluralize
```

## Usage

### Javascript

```javascript
// es5
const TimeCounting = require("time-counting");
const time = TimeCounting("2020-08-10");

//es6
import TimeCounting from "time-counting";
console.log(TimeCounting("2020-08-10"));
```

```sh
Output should be how long it is and how much is left from the current time.
```

### TypeScript

```typescript
import TimeCounting from "time-counting";
console.log(TimeCounting("2020-08-10"));
```

```sh
Output should be how long it is and how much is left from the current time.
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

```console
just now
```

## Testing

```sh
npm run test
```
