const express = require('express');
const busRoutes = require('./bus');
const terminalRoutes = require('./terminal'); 
const travelRoutes = require('./travel')

const router = express.Router();

router.use('/bus',busRoutes);
router.use('/terminal',terminalRoutes);
router.use('/travel',travelRoutes);

module.exports = router;