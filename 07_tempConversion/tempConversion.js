const convertToCelsius = function(fah) {
  let result = null    
  const celsius = (fah - 32 ) * 5/9
  return result = Number.isInteger(celsius) ? celsius : Math.round(celsius * 10) / 10
};

const convertToFahrenheit = function(cel) {
  let result = null   
  const fahrenheit = (9/5 * cel) + 32
  return result = Number.isInteger(fahrenheit) ? fahrenheit : Math.round(fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
