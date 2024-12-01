import express from "express";
import bodyParser from "body-parser";
import { Movie, Movies } from "./movies";

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use("/public", express.static("public"));

// Call movies api to retrieve information about a specifc movie
app.get("/movies/:id", async (req, res) => {
  let id = req.params.id;
  let movie = new Movie(id);

  await movie.fetchMovie();
  if (movie.data.Response === "True") {
    res.status(200).send(movie.data);
  } else {
    res.status(404).send("Movie with id " + id + " not found.");
  }
});

// Call movies api to retrieve list of movies given title
app.get("/movies/:title", async (req, res) => {
  let title = req.params.title;
  let queriedMovies = new Movies(title);

  await queriedMovies.fetchMovies();
  if (queriedMovies.data.Response === "True") {
    res.status(200).send(queriedMovies.data);
  } else {
    res.status(404).send("No movies with title " + title + " found.");
  }
});

// Fetch list of movies from database
app.get("/movies", (req, res) => {
  res.status(500).send("Needs to be implemented");
});

// Add movie to database
app.post("/movies", (req, res) => {
  res.status(500).send("Needs to be implemented");
});

// Modify movie status? (watched? etc.) optional
app.put("/movies/:id", (req, res) => {
  res.status(500).send("Needs to be implemented");
});

// Delete movie from database
app.delete("/movies:id", (req, res) => {
  res.status(500).send("Needs to be implemented");
});

app.listen(port, () => {
  console.log("Running...");
});
