const fibonacci = function (num) {

    if (num < 0) {
        return 'OOPS';
    }

    let result = parseInt(num);
    let previousFib = 0;
    let currentFib = 1;

    for (let i = 2; i <= num; i++) {
        result = previousFib + currentFib;
        previousFib = currentFib;
        currentFib = result;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
