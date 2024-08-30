const express = require('express');

const router = express.Router();

const busRoutes = require('./bus-route');
const tripRoutes = require('./trip-route');
const terminalRoutes = require('./terminal-route');
const cityRoutes = require('./city-route');

router.use('/bus',busRoutes);
router.use('/trips',tripRoutes);
router.use('/terminal',terminalRoutes);
router.use('/city',cityRoutes);

module.exports = router;