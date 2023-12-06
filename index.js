const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/countries', async (req, res) => {
    try {
        const allCountries = await pool.query("SELECT * FROM countries");
        res.json(allCountries.rows);
    } catch {
        console.error(err.message);
    }
})

app.get('/countries/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const singleCountry = await pool.query("SELECT * FROM countries WHERE id = $1", [id]);
        res.json(singleCountry.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
})

// Set up listeners 
app.listen(4000, () => {
    console.log("server has started under port 4000");
});
