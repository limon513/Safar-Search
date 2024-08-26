const express = require('express');

const router = express.Router();

const busRoutes = require('./bus-route');
const agencyRoutes = require('./agency-route');

router.use('/bus',busRoutes);
router.use('/agency',agencyRoutes);

module.exports = router;