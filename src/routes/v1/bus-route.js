const express = require('express');
const { BusController, SeatController } = require('../../controllers');
const { BusMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/',BusMiddleware.newBusRegister,BusController.newBusRegister);
router.post('/seats/:coachNo',SeatController.getSeatMap);

module.exports = router;