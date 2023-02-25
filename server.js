// Import necessary modules and files
const express = require('express');
const ejs = require('ejs');


// Initialize Express app
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from public folder
app.use(express.static('public'));

// Connect to MongoDB

// Route for homepage
app.get('/', (req, res) => {
  res.render('index');
});




// Start server
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
