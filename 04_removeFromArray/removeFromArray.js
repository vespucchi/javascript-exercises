const removeFromArray = function(list, ...removeArgs) {
    let result = list.filter((item) => {
        for(let arg of removeArgs) {
            if(item === arg) {
                return;
            }
        }

        return item;
    });

    return result;

    // A simpler, but more advanced way to do it is to use the 'filter' function,
    // which basically does what we did with the forEach above.

    // var removeFromArray = function(array, ...args) {
    //   return array.filter(val => !args.includes(val))
    // }
    //
};

// Do not edit below this line
module.exports = removeFromArray;
