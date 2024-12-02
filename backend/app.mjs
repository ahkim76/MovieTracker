import express from "express";
import bodyParser from "body-parser";
import { Movie, Movies } from "./movies.js";

import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cors());

app.use(cookieParser());

const port = 4000;

app.use(bodyParser.json());
app.use("/public", express.static("public"));

// Call movies api to retrieve information about a specifc movie
app.get("/movies/id/:id", async (req, res) => {
  let id = req.params.id;
  let movie = new Movie(id);

  await movie.fetchMovie();
  if (movie.data.Response === "True") {
    res.status(201).send(movie.data);
  } else {
    res.status(404).send("Movie with id " + id + " not found.");
  }
});

// Call movies api to retrieve list of movies given title
app.get("/movies/title/:title", async (req, res) => {
  let title = req.params.title;
  let queriedMovies = new Movies(title);

  await queriedMovies.fetchMovies();
  if (queriedMovies.data.Response === "True") {
    res.status(201).send(queriedMovies.data);
  } else {
    res.status(404).send("No movies with title " + title + " found.");
  }
});

// Fetch list of movies
app.get("/movies", async (req, res) => {
  let movies = req.cookies.movies;

  if (movies != null) {
    movies = await movies.json();
  } else {
    movies = [];
  }

  res.status(201).send(movies);
});

// Add movie to movie list
app.post("/movies", async (req, res) => {
  let id = req.body.id;

  let movies = req.cookies.movies;

  if (movies != null) {
    movies = await movies.json();
  } else {
    movies = [];
  }

  movies.push(id);

  res.status(201)
    .cookie("movies", movies, {
      // expires in a month from call
      maxAge: 30 * 86400000
    })
    .send("Added movie with id " + id);
});

// Delete movie from movie list
app.delete("/movies:id", async (req, res) => {
  let id = req.body.id;

  let movies = req.cookies.movies;

  if (movies != null) {
    movies = await movies.json();

    let found = false;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i] == id) {
        movies.splice(i, 1);
        found = true;
        break;
      }
    }

    if (found) {
      res.status(201)
        .cookie("movies", movies, {
          // expires in a month from call
          maxAge: 30 * 86400000
        })
        .send("Removed movie with id " + id);
    } else {
      res.status(404).send("Did not find movie with id " + id);
    }
  } else {
    res.status(404).send("Movie list is empty");
  }
});

app.listen(port, () => {
  console.log("Running...");
});
