const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require('../utils/errors/App-Error')

function newAgencyRegister(req,res,next){
    if(!req.body.agencyName){
        errorResponse.error = new AppError(['agencyName required'],StatusCodes.BAD_REQUEST);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
    if(!req.body.agencyEmail){
        errorResponse.error = new AppError(['agencyEmail required'],StatusCodes.BAD_REQUEST);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
    if(!req.body.agencyTradeNo){
        errorResponse.error = new AppError(['agencyTradeNo required'],StatusCodes.BAD_REQUEST);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
    next();
}

module.exports ={
    newAgencyRegister,
}