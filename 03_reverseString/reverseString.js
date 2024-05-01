const reverseString = function(text) {
    let chars = text.split("");
    let reversed = [];

    for(let i = 0; i < text.length; i++) {
        reversed.unshift(chars[i]);
    }

    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
