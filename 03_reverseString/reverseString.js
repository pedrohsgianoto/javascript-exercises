let str = "";
//Both methods below are built-in methods.
const reverseString = function(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
};
/*
const reverseString = function(str) {
    return str.split("").reverse().join("");
}


//Below we have non-built-in method(s). 

//The first one uses a for loop but it doesn't work for our test because it returns
//the reverted string line by line and the code
//reads only the first line it gets from the return.
/*    const reverseString = function(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
            return newString;
        }
    }
*/
//Using recursion
/*const reverseString = function(str) {
    if (str === "")
    return "";
    else   
        return reverseString(str.substr(1)) + str.charAt(0);
}
*/
// Do not edit below this line
