

const sumAll = function (num1, num2) {
    let sum = 0;
    let start = num1 > num2 ? num2 : num1;
    let end = num1 > num2 ? num1 : num2;

    if (typeof start === 'number'
        && typeof end === 'number'
        && start >= 0
        && end >= 0) {
            
        for (let i = start; i <= end; i++) {
            sum += i;
        }

    } else {
        return 'ERROR';
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
