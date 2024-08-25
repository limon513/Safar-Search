const express = require('express');
const { AgencyController } = require('../../controllers');
const { AgencyMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/',AgencyMiddleware.newAgencyRegister,AgencyController.newAgencyRegister);

module.exports = router;