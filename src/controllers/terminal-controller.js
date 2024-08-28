const { StatusCodes } = require("http-status-codes");
const { TerminalService } = require("../services");
const {successResponse,errorResponse} = require('../utils/common');
const AppError = require("../utils/errors/App-Error");
const { response } = require("express");

async function getTerminalsById(req,res) {
    try {
        const response = await TerminalService.getTerminalsById(req.body.allowedTerminals);
        if(!response) throw new AppError(['no terminal found'],StatusCodes.NOT_FOUND);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        if(error instanceof Error) errorResponse.error = error;
        else errorResponse.error = new AppError(['service unavailable'],StatusCodes.INTERNAL_SERVER_ERROR);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
}

async function getTerminalByCity(req,res) {
    try {
        const response = await TerminalService.getTerminalByCity(req.body.cityId);
        if(!response || response.length<=0) throw new AppError(['no terminal found'],StatusCodes.NOT_FOUND);
        successResponse.data = response;
        return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        if(error instanceof Error) errorResponse.error = error;
        else errorResponse.error = new AppError(['service unavailable'],StatusCodes.INTERNAL_SERVER_ERROR);
        return res.status(errorResponse.error.statusCode).json(errorResponse);
    }
}

module.exports={
    getTerminalsById,
    getTerminalByCity,
}