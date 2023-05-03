const palindromes = function (str) {
    let cleanStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "").toLowerCase();
    let reverseCleanStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseCleanStr;
};

// Do not edit below this line
module.exports = palindromes;
