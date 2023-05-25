/* Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
```
convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32
``` */

const convertToCelsius = function (fahrenheit) {
  const celcius = ((fahrenheit - 32) * 5) / 9;
  return Number(celcius.toFixed(1));
};

const convertToFahrenheit = function (celcius) {
  const fahrenheit = (celcius * 9) / 5 + 32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
