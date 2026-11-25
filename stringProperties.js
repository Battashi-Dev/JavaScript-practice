const movie = {
  title: "admin",
  releaseYear: 2000,
  rating: 9.8,
  director: "John",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}
