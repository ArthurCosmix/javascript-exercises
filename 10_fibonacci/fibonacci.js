const fibonacci = function(num) {
    if(num < 0) return "OOPS"
    let goldenRatio = (1 + Math.sqrt(5))
    let inverseGoldenRatio = (1 - Math.sqrt(5))
    let numerator = Math.pow(goldenRatio , num) - Math.pow(inverseGoldenRatio, num)
    let denominator = Math.pow(2, num) * Math.sqrt(5)
    const result = numerator / denominator
    return Math.round(result * 10) / 10
};

// Do not edit below this line
module.exports = fibonacci;
