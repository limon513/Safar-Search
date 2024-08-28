const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const {successResponse,errorResponse} = require('../utils/common');
const AppError = require("../utils/errors/App-Error");

async function getCities(req,res) {
    try {
        const response = await CityService.getCities();
        if(!response || response.length<=0) throw new AppError(['no city found!'],StatusCodes.NOT_FOUND);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        if(error instanceof Error) errorResponse.error = error;
        else errorResponse.error = new AppError(['service unavailable'],StatusCodes.INTERNAL_SERVER_ERROR);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
}

module.exports={
    getCities,
}