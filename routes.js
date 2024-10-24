const express = require('express');
const router = express.Router();

// Handle form submission
router.post('/submit', (req, res) => {
    const { name, age, color } = req.body;
    console.log(`Name: ${name}, Age: ${age}, Favorite Color: ${color}`);
    res.send(`<h1>Thank you, ${name}!</h1><p>Your details have been saved.</p>`);
});

module.exports = router;
