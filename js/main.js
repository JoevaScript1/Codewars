// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
  if (b === true){
    let b = "true"
    return b
  } else{
    let b = "false"
    return b
  }
}

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  let result = []
  for(let i = a; i <= b; i++){ 
    result.push(i)
  }
    return result
}

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
  // Initialize an empty array to store the modified characters
  let result = [];

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
      // Capitalize the current character
      let capitalizedChar = str[i].toUpperCase();

      // Repeat the current character (lowercased) based on its position
      let repeatedChars = str[i].toLowerCase().repeat(i);

      // Concatenate the capitalized character with the repeated characters
      let modifiedChar = capitalizedChar + repeatedChars;

      // Push the modified character to the result array
      result.push(modifiedChar);
  }

  // Join the characters in the result array with dashes and return the result
  return result.join("-");
}
function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    const square = i * i;
    const squareStr = square.toString();
    for (let j = 0; j < squareStr.length; j++) {
      if (parseInt(squareStr[j]) === d) {
        count++;
      }
    }
  }
  return count;
}