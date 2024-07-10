const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World From Piyush Bhatee!');
});

app.get('/env', (req, res) => {
  const envs = {
    port: process.env.PORT,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
  };
  res.json(envs);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
