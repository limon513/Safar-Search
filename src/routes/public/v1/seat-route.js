const express = require('express');
const { SeatController } = require('../../../controllers');
const { SeatMiddleware } = require('../../../middlewares');

const router = express.Router();

router.put('/',SeatMiddleware.blockSeats,SeatController.blockSeats);

module.exports = router;