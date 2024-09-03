const {SeatRepository} = require('../repositories');
const { Utils } = require("sequelize");
const AppError = require('../utils/errors/App-Error');
const { StatusCodes } = require('http-status-codes');
const SeatRepo = new SeatRepository();

async function getSeatMap(coachNo) {
    try {
        const seatMap = await SeatRepo.getSeatMap(coachNo);
        if(seatMap.length <= 0) throw new AppError(['no seatMap found'],StatusCodes.NOT_FOUND);
        return seatMap;
    } catch (error) {
        if(error instanceof Error) throw error;
        throw new AppError(['service unavailable'],StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function blockSeats(seatIds) {
    try {
        const response = await SeatRepo.blockSeats(seatIds);
        return response;
    } catch (error) {
        if(error instanceof Error) throw error;
        throw new AppError(['service unavailable'],StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function bookSeats(seatIds) {
    try {
        const response = await SeatRepo.bookSeats(seatIds);
        return response;
    } catch (error) {
        if(error instanceof Error) throw error;
        throw new AppError(['service unavailable'],StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function clearSeats(seatIds) {
    try {
        const response = await SeatRepo.clearSeats(seatIds);
        return response;
    } catch (error) {
        if(error instanceof Error) throw error;
        throw new AppError(['service unavailable'],StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    getSeatMap,
    blockSeats,
    bookSeats,
    clearSeats,
}
