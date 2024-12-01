export class Movie {
  #id;
  #data;

  constructor(id) {
    this.#id = id;
    this.#data = null;
  }

  async fetchMovie() {
    // fetches movie data
    let response = await fetch(
      "https://www.omdbapi.com/" + "?i=" + this.#id + "&apikey=" + api_key
    );

    let movieData = await response.json();

    this.#data = movieData;

    return movieData.Response;
  }

  get data() {
    return this.#data;
  }
}

export class Movies {
  #title;
  #data;

  constructor(title) {
    this.#title = title;
  }

  async fetchMovies() {
    let response = await fetch(
      "https://www.omdbapi.com/" + "?s=" + this.#title + "&apikey=" + api_key
    );

    let moviesData = await response.json();

    this.#data = moviesData;

    return moviesData.Response;
  }

  get data() {
    return this.#data;
  }
}

const api_key = "1c3326a9";
