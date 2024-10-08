const { StatusCodes } = require('http-status-codes');
const {TripService} = require('../services');
const { successResponse, errorResponse } = require('../utils/common');
const AppError = require('../utils/errors/App-Error');

async function  newTripRegister(req,res) {
    try {
        const response = await TripService.newTripRegister(req.body);
        if(!response) throw new AppError(['service unavailable'],
                                StatusCodes.INTERNAL_SERVER_ERROR);
        successResponse.data = response;
        return res.
                status(StatusCodes.OK).
                json(successResponse);
    } catch (error) {
        if(error instanceof Error) errorResponse.error = error;
        else errorResponse.error = error;
        return res.
                status(StatusCodes.INTERNAL_SERVER_ERROR).
                json(errorResponse);
    }
}

async function  getAllTrips(req,res) {
    try {
        const response = await TripService.getAllTrips(req.query);
        successResponse.data = response;
        return res.
                status(StatusCodes.OK).
                json(successResponse);
    } catch (error) {
        if(error instanceof Error) errorResponse.error = error;
        else errorResponse.error = new AppError(['service unavailable'],StatusCodes.INTERNAL_SERVER_ERROR);
        return res.
                status(errorResponse.error.statusCode).
                json(errorResponse);
    }
}

module.exports = {
    newTripRegister,
    getAllTrips,
}