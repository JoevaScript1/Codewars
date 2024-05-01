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