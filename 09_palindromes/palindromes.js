const palindromes = function (text) {
    const alphanum_regex = /[a-z0-9]/i;
    
    text = text
        .toLowerCase()
        .split("")
        .filter(item => item.match(alphanum_regex));

    let reversed = text.toReversed();

    return text.join("").toString() === 
        reversed.join("").toString() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
