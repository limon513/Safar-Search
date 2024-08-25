const express = require('express');

const router = express.Router();

const busRoutes = require('./bus-route');

router.use('/bus',busRoutes);

module.exports = router;