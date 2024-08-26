const express = require('express');

const router = express.Router();

const busRoutes = require('./bus-route');
const agencyRoutes = require('./agency-route');
const tripRoutes = require('./trip-route');

router.use('/bus',busRoutes);
router.use('/agency',agencyRoutes);
router.use('/trip',tripRoutes);

module.exports = router;