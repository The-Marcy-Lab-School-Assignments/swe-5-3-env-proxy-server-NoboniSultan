//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToFrontend = path.join(__dirname, '../frontend');
const app = express();

app.use(express.static(pathToFrontend));

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveGifs = async (req, res) => {
    try {
        const searchTerm = req.query.q;
        let url;

        if (searchTerm) {
            url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}&limit=3&rating=g`;
        } else {
            url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}&limit=3&rating=g`;
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Fetch failed. ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(503).send(error);
    }
};

//////////////////////////
// Listener
//////////////////////////
app.get('/api/gifs', serveGifs);
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 