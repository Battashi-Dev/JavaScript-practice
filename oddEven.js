//Q: check if numbers to the limit is even or odd.

//1. create a function showNumber
//2. loop the limit
//3. check if number divisible by 2 is equal to 0 as even
//4. else dec odd
//5. on top of the function we call showNumber and give it a limit

showNumbers(10);
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i, "EVEN");
    } else console.log(i, "ODD");

    // const message = i % 2 === 0 ? "EVEN" : "ODD";
    // console.log(i, message);
  }
}
