const express = require('express');

const test = (req, res) => {
  res.json('test is working');
};

module.exports = test;
