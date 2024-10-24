const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

// Routes
const routes = require('./routes');
app.use('/', routes);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
