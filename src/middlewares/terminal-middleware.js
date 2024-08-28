const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/errors/App-Error");

function getTerminalsById(req,res,next){
    if(!req.body.allowedTerminals){
        errorResponse.error = new AppError(['no terminals to fetch'],StatusCodes.BAD_REQUEST);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
    next();
}

function getTerminalByCity(req,res,next){
    if(!req.body.cityId){
        errorResponse.error = new AppError(['no terminals to fetch'],StatusCodes.BAD_REQUEST);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
    next();
}

module.exports = {
    getTerminalsById,
    getTerminalByCity,
}