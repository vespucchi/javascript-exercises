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
};

// Do not edit below this line
module.exports = removeFromArray;
