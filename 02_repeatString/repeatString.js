let str = "hey";
let num = 10;
let fullStr = "";
const repeatString = function(str, num) {
    if (num === 0) {
        return '';
      } else if (num < 0) {
        return 'ERROR';
      } else {
        let repeatedStr = '';
        for (let i = 0; i < num; i++) {
          repeatedStr += str;
        }
        return repeatedStr;
      }
    };
    const randomNum = Math.floor(Math.random() * 10) + 1;

// Call the repeatString function with the random number
    const repeatedString = repeatString('hey', randomNum);


// Do not edit below this line
module.exports = repeatString;
