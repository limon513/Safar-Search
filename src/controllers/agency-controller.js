const { StatusCodes } = require("http-status-codes");
const { AgencyService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

async function newAgencyRegister(req,res) {
    try {
        const response = await AgencyService.newAgencyRegister(req.body);
        successResponse.data = response;
        return res.status(StatusCodes.ACCEPTED).json(successResponse);
    } catch (error) {
        errorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
}

module.exports = {
    newAgencyRegister,
}