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



//Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(num) {
  if (num === 0) {
    return num;
  } else if (num > 0) {
    return Math.ceil(num / 5) * 5;
  } else {
    return Math.ceil(num / 5) * 5;
  }
}

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str){
  return str.slice(1, -1)
 
};

// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

function saleHotdogs(n){
  if (n < 5){
    return 100 * n
  } else if (n >= 5 && n < 10){
    return 95 * n
  } else{
    return 90 * n
  }
}

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
// do this in js

function shortestWordLength(str) {
  // Split the string into an array of words
  const words = str.split(" ");
  
  // Initialize shortestLength with the length of the first word
  let shortestLength = words[0].length;
  
  // Iterate through the array of words
  for (let i = 1; i < words.length; i++) {
      // Update shortestLength if the length of the current word is shorter
      if (words[i].length < shortestLength) {
          shortestLength = words[i].length;
      }
  }
  
  // Return the shortest length found
  return shortestLength;
}

