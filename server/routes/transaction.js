const express = require('express');
const { scheduledTransfer } = require('../controllers/transactionController');
const router = express.Router();

router.post('/scheduledTransfer', scheduledTransfer);
