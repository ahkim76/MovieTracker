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


app.listen(port, () => {
  console.log("Running...");
});
