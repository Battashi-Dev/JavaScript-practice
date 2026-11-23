// a speed limit exercise that fines when exceed the limit;

//1. dec a speedLimit as variable where we pass our speed.
//2. dec a limit of speed
//3. take speedLimit - limit if equal to 5 we call it as a point,
// will use math.floor to cut down the decimal to whole number
//4. so dec another variable as point = 5
//5. call a function of speedLimit
//6. use if..else to check if speedLimit is greater than  limit + point
// console

let speedLimit = 70;
let point = 5;
limitPoints = 12;

checkSpeed(90);
function checkSpeed(speed) {
  const excessSpeed = speed - speedLimit;

  if (excessSpeed < point) {
    console.log("ok");
    return;
  }
  const points = Math.floor(excessSpeed / point);
  if (points >= limitPoints) {
    console.log("license Suspended");
    return;
  }
  console.log(`points ${points}`);
}
