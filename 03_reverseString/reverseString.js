const reverseString = function(text) {
    const splitText = text.split("")
    const reverseText = splitText.toReversed()
    return reverseText.join("")
};

// Do not edit below this line
module.exports = reverseString;
