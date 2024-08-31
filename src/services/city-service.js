const { sequelize } = require("../models");
const { CityRepository } = require("../repositories");
const CityRepo = new CityRepository();

async function getCities() {
    try {
        const response = await CityRepo.getCities();
        return response;
    } catch (error) {
        throw error;
    }
}

async function getCitiyById(id) {
    try {
        const city = await CityRepo.getCitiyById(id);
        return city;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCities,
    getCitiyById
}