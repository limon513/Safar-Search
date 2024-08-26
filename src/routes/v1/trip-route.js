const express = require('express');
const { TripController } = require('../../controllers');
const {TripMiddleware} = require('../../middlewares')

const router = express.Router();

router.post('/',TripMiddleware.newTripRegister,TripController.newTripRegister);

module.exports = router;