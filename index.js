const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Set up listeners 
app.listen(4000, () => {
    console.log("server has started under port 4000");
});
