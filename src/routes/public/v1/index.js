const express = require('express');

const router = express.Router();

const busRoutes = require('./bus-route');
const tripRoutes = require('./trip-route');
const terminalRoutes = require('./terminal-route');
const cityRoutes = require('./city-route');
const seatRoutes = require('./seat-route');

router.use('/bus',busRoutes);
router.use('/trips',tripRoutes);
router.use('/terminal',terminalRoutes);
router.use('/city',cityRoutes);
router.use('/seat',seatRoutes);

module.exports = router;