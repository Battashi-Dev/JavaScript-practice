// a fizzbuzz
// divisible by 3 -> fizz
// divisible by 5 -> buzz
// divisible by both 3 and 5 -> fizzbuzz
// not visible by both 3 or 5 -> input
// not a number -> not a number

//1. we create variable
//2. call the variable in the function
//3. use if... else
// console

let output = fizzbuzz();

console.log(output);

function fizzbuzz(input) {
  if (typeof input !== "number") return NaN;
  else if (input % 3 === 0 && input % 5 === 0) return "fizzbuzz";
  else if (input % 3 === 0) return "fizz";
  else if (input % 5 === 0) return "buzz";
  return input;
}

function fizzbuzz(number) {
  return typeof number !== "number"
    ? NaN
    : number % 3 === 0 && number % 5 === 0
      ? "fizzbuzz"
      : number % 3 === 0
        ? "fizz"
        : number % 5 === 0
          ? "buzz"
          : number;
}
