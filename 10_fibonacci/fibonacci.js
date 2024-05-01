const fibonacci = function(a) {
    a = +a;
    
    if(a === 0) return 0;
    if(a < 0) return "OOPS";

    let sequence = [1,1];

    for(let i = 1; i <= a - 2; i++) {
        sequence.push(sequence[i - 1] + sequence[i]);
    }

    return sequence[a - 1];
};

// Do not edit below this line
module.exports = fibonacci;
