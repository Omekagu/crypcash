const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv').config();

const User = require('../models/userModel');
const registered = (req, res) => {
  const { name, email, phone, password, userRef } = req.body;
  res.send('Registered');
};

module.exports = registered;
