const removeFromArray = function (arr, ...args) {
    for (let arg of args) {
        let index = arr.indexOf(arg);
        if (index >= 0) {
            arr.splice(arr.indexOf(arg), 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
