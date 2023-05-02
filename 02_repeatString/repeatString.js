const repeatString = function (word, quantity) {
    if (quantity < 0) {
        return 'ERROR';
    }
    return word.repeat(quantity);
};
// Do not edit below this line
module.exports = repeatString;
