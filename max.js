//write a function that takes two numbers
// and return the maximum of the two

//1. create a variable that takes a max of two
//2. call max as the function
//3. i use conditional to determine the max of two
//4. console

let number = max(2, 5);

console.log(number);

// if.. else
function max(a, b) {
  if (a > b) return a;
  return b;
}

// ternary
function max(a, b) {
  return a > b ? a : b;
}
