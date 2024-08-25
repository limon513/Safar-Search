const { StatusCodes } = require("http-status-codes");
const { BusService, SeatService } = require("../services");
const {successResponse,errorResponse} = require('../utils/common');

async function newBusRegister(req,res) {
    try {
        const response = await BusService.newBusRegister(req.body);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
}

module.exports={
    newBusRegister,
}