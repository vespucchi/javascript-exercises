const reverseString = function(text) {
    let chars = text.split("");
    let reversed = [];

    for(let i = 0; i < text.length; i++) {
        reversed.unshift(chars[i]);
    }

    return reversed.join("");

    // return text.split("").reverse().join("");
    
    // Because in many ways strings behave as if they were arrays 
    // of characters, many of JavaScript's standard array methods 
    // can operate on strings as well.
};

// Do not edit below this line
module.exports = reverseString;
