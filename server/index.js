const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();
const app = express();
const port = 8000;
const mongoose = require('mongoose');

// Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Database connect');
  })
  .catch((err) => {
    console.log('Database not connected', err);
  });

// const User = require('./models/userModel');

app.use(express.json());
app.use('/auth', require('./routes/auth'));
app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.listen(port, () => {
  console.log(`server is running on: ${port}`);
});
