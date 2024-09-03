const express = require('express');
const { SeatController } = require('../../../controllers');
const { SeatMiddleware } = require('../../../middlewares');

const router = express.Router();

router.put('/block',SeatMiddleware.blockSeats,SeatController.blockSeats);
router.put('/book',SeatMiddleware.blockSeats,SeatController.bookSeats);
router.put('/reset',SeatMiddleware.blockSeats,SeatController.clearSeats);

module.exports = router;