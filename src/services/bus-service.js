const { sequelize } = require("../models");
const { BusRepository } = require("../repositories");
const SeatService = require('./seat-service');
const BusRepo = new BusRepository();


async function newBusRegister(data) {
    try {
        const response = await BusRepo.newBusRegister(data);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    newBusRegister,
}