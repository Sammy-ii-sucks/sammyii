/*const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change this to your desired port

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',  // Change this to your MySQL server host
  user: 'youruser',   // Change this to your MySQL username
  password: 'yourpassword', // Change this to your MySQL password
  database: 'yourdatabase'  // Change this to your MySQL database name
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint for user registration
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Insert new user into the database
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ message: 'Error creating user' });
    } else {
      console.log('User created:', result);
      res.status(200).json({ message: 'User created successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/