// take n image of width and height nd
// return true if image is landscape

//1. dec a variable that holds width and height
//2. call a function of the two
//3, use conditional
//console

let landscape = land(400, 500);

console.log(landscape);

// if... else
function land(width, height) {
  if (width > height) return true;
  return false;
}

// ternary
function land(width, height) {
  return width > height;
}
