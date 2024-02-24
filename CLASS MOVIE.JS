class Movie {
  constructor(title, studio, rating = "U/A") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "U/A");
  }
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("LEO", "SEVEN SCREEN ENTERTAINMENT", "U/A");
