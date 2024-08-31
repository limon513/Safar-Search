const { StatusCodes } = require("http-status-codes")
const { errorResponse } = require("../utils/common")
const AppError = require("../utils/errors/App-Error")

function blockSeats(req,res,next){
    if(!req.body.seatIds){
        errorResponse.error = new AppError(['please choose a seat'],StatusCodes.BAD_REQUEST);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
    next();
}

module.exports = {
    blockSeats,
}