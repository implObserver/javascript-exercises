function isMultiple4(num) {
    return num % 4 === 0;
}

function isMultiple100(num) {
    return num % 100 === 0;
}

function isMultiple400(num) {
    return num % 400 === 0;
}

const leapYears = function (year) {
    if (isMultiple4(year)) {
        if (isMultiple100(year)) {
            if (isMultiple400(year)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
