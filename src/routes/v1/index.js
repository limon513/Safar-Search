const express = require('express');

const router = express.Router();

const busRoutes = require('./bus-route');
const tripRoutes = require('./trip-route');

router.use('/bus',busRoutes);
router.use('/trips',tripRoutes);

module.exports = router;