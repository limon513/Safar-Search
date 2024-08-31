const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/errors/App-Error");
const { getTodaysDateString, instantTimeString, compareTime } = require("../utils/helpers/dateTimeCompare");
const { CityService } = require("../services");

async function newTripRegister(req,res,next){
    if(!req.body.coachNo){
        errorResponse.error = new AppError(['coachNo required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.from){
        errorResponse.error = new AppError(['departure city required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.to){
        errorResponse.error = new AppError(['arrival city required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.departureDate){
        errorResponse.error = new AppError(['departure date required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(getTodaysDateString() > req.body.departureDate){
        errorResponse.error = new AppError(['can not set trips for past'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.departureTime){
        errorResponse.error = new AppError(['deaparture time required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!compareTime(req.body.departureTime,instantTimeString())){
        errorResponse.error = new AppError(['can not register instant trip'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.boardingTerminal){
        errorResponse.error = new AppError(['boarding terminal required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.price){
        errorResponse.error = new AppError(['ticket price required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.allowedTerminals){
        req.body.allowedTerminals = req.body.boardingTerminal.toString();
    }
    try {
        if(!req.body.route){
            const fromCity = await CityService.getCitiyById(req.body.from);
            const toCity = await CityService.getCitiyById(req.body.to);
            req.body.route = `${fromCity.cityName}-${toCity.cityName}`;
        }
        next();
    } catch (error) {
        errorResponse.error = new AppError(['service unavailable'],StatusCodes.INTERNAL_SERVER_ERROR);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
}

module.exports = {
    newTripRegister,
}