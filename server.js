const express = require('express');

const PORT = process.env.PORT || 3001;

//instantiates the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data, 
app.use(express.json());

// makes files "static resources", meaning all front end code can be accessed w/o a specific endpoint
app.use(express.static('public'));
const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });