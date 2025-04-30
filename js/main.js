const simpleGit = require("simple-git");
const git = simpleGit();

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b) {
  if (b === true) {
    let b = "true";
    return b;
  } else {
    let b = "false";
    return b;
  }
}

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
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

function removeChar(str) {
  return str.slice(1, -1);
}

// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90

function saleHotdogs(n) {
  if (n < 5) {
    return 100 * n;
  } else if (n >= 5 && n < 10) {
    return 95 * n;
  } else {
    return 90 * n;
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

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

//Given an array of integers your solution should find the smallest integer.

function findSmallestInteger(array) {
  // Sort the array in ascending order
  array.sort(function (a, b) {
    return a - b;
  });

  // Return the first element (smallest integer) of the sorted array
  return array[0];
}

// Test cases
console.log(findSmallestInteger([34, 15, 88, 2])); // Output: 2
console.log(findSmallestInteger([34, -345, -1, 100])); // Output: -345

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
const removeUrlAnchor = (url) => url.split("#")[0];

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers) {
  const min = numbers[0];
  const max = numbers[numbers.length - 1];
  let result = [];

  for (i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    let volumeOfCuboid = length * width * height;
    return volumeOfCuboid;
  }
}

//   Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
  // Initialize the sum variable to 0
  let sum = 0;

  // Loop through each argument passed into the function
  for (let i = 0; i < numbers.length; i++) {
    // Square the current number and add it to the sum
    sum += numbers[i] ** 2;
  }

  // Return the final sum
  return sum;
}

function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

//   In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.
function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .map((char) => {
      let code = char.charCodeAt(0);
      if (code >= 97 && code <= 122) {
        return code - 96;
      }
      return "";
    })
    .filter((char) => char !== "")
    .join(" ");
}

// Given a point in a Euclidean plan, return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes

function quadrant(x, y) {
  if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  } else if (x < 0 && y > 0) {
    return 2;
  } else {
    return 1;
  }
}

function lengthOfVine(n, height, radius) {
  // Step 1: Calculate circumference
  let circ = Math.PI * 2 * radius;

  // Step 2: Calculate height per turn
  let heightPerTurn = height / n;

  // Step 3: Calculate length of vine in one turn using Pythagorean theorem
  let lengthPerTurn = Math.sqrt(circ ** 2 + heightPerTurn ** 2);

  // Step 4: Total length of the vine
  let totalLength = n * lengthPerTurn;

  // Step 5: Round to 2 decimal places
  return parseFloat(totalLength.toFixed(2));
}

//Remove Spaces
function noSpace(x) {
  x = x.split(" ").join("");
  return x;
}

//test

function fakeBin(x) {
  let numArray = x.split(""); // Split the string into individual characters
  let result = "";

  for (let i = 0; i < numArray.length; i++) {
    if (Number(numArray[i]) < 5) {
      result += "0"; // Append '0' to result if the digit is less than 5
    } else {
      result += "1"; // Append '1' otherwise
    }
  }

  return result; // Return the resulting binary string
}

function check(a, x) {
  return a.includes(x);
}

function correct(string) {
  checkStr = string.split("");
  for (i = 0; i < checkStr.length; i++) {
    if (checkStr[i] == "5") {
      checkStr[i] = "S";
    }
    if (checkStr[i] == "1") {
      checkStr[i] = "I";
    }
    if (checkStr[i] == "0") {
      checkStr[i] = "O";
      console.log(checkStr);
    }
  }
  return checkStr.join("");
}

function stringy(size) {
  let result = ""; // Initialize an empty string to store the result
  for (let i = 0; i < size; i++) {
    // Loop from 0 to size
    if (i % 2 === 0) {
      // If `i` is even, add '1' to the result
      result += "1";
    } else {
      // If `i` is odd, add '0' to the result
      result += "0";
    }
  }
  return result; // Return the resulting string
}

function getDrinkByProfession(param) {
  if (param.toLowerCase() === "jabroni") {
    return "Patron Tequila";
  }
  if (param.toLowerCase() === "school counselor") {
    return "Anything with Alcohol";
  }
  if (param.toLowerCase() === "programmer") {
    return "Hipster Craft Beer";
  }
  if (param.toLowerCase() === "bike gang member") {
    return "Moonshine";
  }
  if (param.toLowerCase() === "politician") {
    return "Your tax dollars";
  }
  if (param.toLowerCase() === "rapper") {
    return "Cristal";
  }
  if (param.toLowerCase() === "pundit") {
    return "Beer";
  } else {
    return "Beer";
  }
}

//Update

function derive(coefficient, exponent) {
  return (coefficient * exponent).toString() + "x^" + (exponent - 1).toString();
}

function testEven(n) {
  if (n % 2 == 0) {
    return true;
  } else return false;
}

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

function countSheeps(sheep) {
  let sheepcount = 0;
  for (n = 0; n < sheep.length; n++) {
    if (sheep[n] == true) {
      sheepcount += 1;
    }
  }
  return sheepcount;
}

function grow(x) {
  let product = 1;
  for (i = 0; i < x.length; i++) {
    product *= x[i];
  }
  return product;
}

function electionsWinners(votes, k) {
  const maxVotes = Math.max(...votes); // Find the highest current votes
  const maxVotesCount = votes.filter((v) => v === maxVotes).length; // Count how many candidates have max votes
  let count = 0;

  for (let i = 0; i < votes.length; i++) {
    let maxPossibleVotes = votes[i] + k; // Max votes candidate i can reach

    // If no votes left, check if there's already a single winner
    if (k === 0) {
      return maxVotesCount === 1 ? 1 : 0; // If one leader, they win; if tied, return 0
    }

    // If a candidate can exceed the current max votes, count them
    if (maxPossibleVotes > maxVotes) {
      count++;
    }
  }

  return count;
}

function queueTime(customers, n) {
  let tills = Array(n).fill(0);
  console.log(tills);
  console.log(n);
  for (let time of customers) {
    let minIndex = tills.indexOf(Math.min(...tills));
    tills[minIndex] += time;
    console.log(...tills);
  }
  return Math.max(...tills);
}


function checkForFactor (base, factor) {
  return base % factor == 0
}

function isTriangle(a,b,c){
  const arr = [a, b, c]
  arr.sort((x,y) =>(x - y))
  return arr[0] + arr[1] > arr[2]
}

function sum (numbers) {
  let sum = 0
  if (numbers.length == 0){
    return 0
  }
  for (let i=0; i < numbers.length; i++){
    sum += numbers[i]
    console.log()
  }
  return sum
}