const express = require('express');
const registered = require('../controllers/authController');
const router = express.Router();

// post request
router.post('/', registered);

module.exports = router;
