const { StatusCodes } = require("http-status-codes");
const { SeatService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

async function getSeatMap(req,res) {
    try {
        const coachNo = req.params.coachNo;
        const response = await SeatService.getSeatMap(coachNo);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(error.statusCode).json(errorResponse);
    }
}

module.exports = {
    getSeatMap,
}