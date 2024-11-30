import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use('/public', express.static('public'));


// Call movies api to retrieve movie information
app.get('/movies/:id', (req, res) => {
    res.status(500).send("Needs to be implemented");
});

// Fetch list of movies from database
app.get('/movies', (req, res) => {
    res.status(500).send("Needs to be implemented");
})

// Add movie to database
app.post('/movies', (req, res) => {
    res.status(500).send("Needs to be implemented");
});

// Modify movie status? (watched? etc.) optional
app.put('/nodes/:id', (req, res) => {
    res.status(500).send("Needs to be implemented");
});

// Delete movie from database
app.delete('/movies:id', (req, res) => {
    res.status(500).send("Needs to be implemented");
});


app.listen(port, () => {
    console.log('Running...');
})