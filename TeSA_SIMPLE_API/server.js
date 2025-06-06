const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON
app.use(express.json());


// Define routes
app.get('/', (req, res) => {
  res.send('Hello TeSA Cohort 3 Guys!');
});


app.get('/hi', (req, res) => {
  res.send('This is Software Enginnering - Java Specialisation!');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
