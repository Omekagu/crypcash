const express = require('express');
// const router = express.Router();
const dotenv = require('dotenv').config();
// const punycode = require('punycode/');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
app.use(express.json());

require('./models/userModel');

// const JWT_SECRET = '5RYUuT22n88jI05Ud'
// mongodb user model
const User = mongoose.model('UserInfo');

// Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Database connect');
  })
  .catch((err) => {
    console.log('Database not connected', err);
  });

// app.use('/auth', require('./routes/auth'));
app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.post('/register', async (req, res) => {
  const { name, email, password, phone } = req.body;
  const oldUser = await User.findOne({ email: email });
  console.log(name);

  if (oldUser) {
    return res.status(400).send('user already exist');
  }

  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);
  try {
    await User.create({
      name,
      email,
      password: hashPassword,
      phone,
    });

    res.send({ status: 'ok', data: 'user created' });
  } catch (error) {
    res.send({ status: 'error', data: 'error' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const oldUser = await User.findOne({ email: email });

  if (!oldUser) {
    return res.send({ data: 'User does not exist' });
  }

  if (await bcrypt.compare(password, oldUser.password)) {
    const token = jwt.sign({ email: oldUser.email }, process.env.JWT_SECRET);

    if (res.status(201)) {
      return res.send({ status: 'ok', data: token });
    } else {
      return res.send({ error: 'err' });
    }
  }
});

app.post('/userData', async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    const useremail = user.email;

    User.findOne({ email: useremail }).then((data) => {
      return res.send({ status: 'ok', data: data });
    });
  } catch (error) {
    return res.send({ error: error });
  }
});
// Listening to port
app.listen(port, () => {
  console.log(`server is running on: ${port}`);
});
