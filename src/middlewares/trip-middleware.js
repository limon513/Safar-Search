const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/errors/App-Error");

function newTripRegister(req,res,next){
    if(!req.body.agencyId){
        errorResponse.error = new AppError(['agencyId required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
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
    if(!req.body.departureTime){
        errorResponse.error = new AppError(['deaparture time required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.boardingTerminal){
        errorResponse.error = new AppError(['boarding terminal required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.allotedSeats){
        errorResponse.error = new AppError(['seat alloted required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.price){
        errorResponse.error = new AppError(['ticket price required'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.route){
        req.body.route = `${req.body.from}-${req.body.to}`;
    }
    next();
}

module.exports = {
    newTripRegister,
}