const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require('../utils/errors/App-Error')

function newBusRegister(req,res,next){
    if(!req.body.agencyId){
        errorResponse.error = new AppError(['agencyId required'],StatusCodes.BAD_REQUEST);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
    if(!req.body.totalSeats){
        errorResponse.error = new AppError(['totalSeats required'],StatusCodes.BAD_REQUEST);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
    if(!req.body.row){
        errorResponse.error = new AppError(['seat row number required'],StatusCodes.BAD_REQUEST);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
    if(!req.body.column){
        errorResponse.error = new AppError(['seat column number required'],StatusCodes.BAD_REQUEST);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }

    next();
}

module.exports ={
    newBusRegister,
}