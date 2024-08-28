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

async function getBusesbyAgency(id) {
    try {
        const response = await BusRepo.getBusesbyAgency(id);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    newBusRegister,
    getBusesbyAgency,
}