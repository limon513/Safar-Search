const { StatusCodes } = require("http-status-codes");
const { BusService, SeatService } = require("../services");
const {successResponse,errorResponse} = require('../utils/common');
const AppError = require("../utils/errors/App-Error");

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

async function getBusesbyAgency(req,res) {
    try {
        const response = await BusService.getBusesbyAgency(req.body.agencyId);
        if(!response || response.length <= 0) throw new AppError(['no buses found'],StatusCodes.NOT_FOUND);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        if(error instanceof Error) errorResponse.error = error;
        else errorResponse.error = new AppError(['service unavailable'],StatusCodes.INTERNAL_SERVER_ERROR);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
}

module.exports={
    newBusRegister,
    getBusesbyAgency,
}