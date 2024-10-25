const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./mydatabase.db');

// Handle form submission
router.post('/submit', (req, res) => {
    const { name, age, color } = req.body;
    console.log(`Name: ${name}, Age: ${age}, Favorite Color: ${color}`);
    
    // Save the data to the SQLite database
    db.run(`INSERT INTO data (temperature, humidity) VALUES (?, ?)`, [age, color], function(err) {
        if (err) {
            return res.status(500).send("Error storing data");
        }
        res.send(`<h1>Thank you, ${name}!</h1><p>Your details have been saved.</p>`);
    });
});

// Route to get all data
router.get('/data', (req, res) => {
    db.all(`SELECT * FROM data`, [], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error retrieving data");
        }
        res.json(rows);
    });
});

module.exports = router;
