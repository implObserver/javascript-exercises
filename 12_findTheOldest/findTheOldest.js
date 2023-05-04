const findTheOldest = function (arr) {
    let processedArr = arr.map(e => [e.name, e.yearOfDeath >= 0
        ? e.yearOfDeath - e.yearOfBirth
        : new Date().getFullYear() - e.yearOfBirth]);

    let oldestHuman = processedArr.reduce((accumulator, element) => {
        return element[1] > accumulator[1] ? element : accumulator;
    });

    let result = {
        name: oldestHuman[0],
        age: oldestHuman[1],
    };

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
