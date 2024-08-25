const { sequelize } = require("../models");
const { AgencyRepository } = require("../repositories");
const AgencyRepo = new AgencyRepository();

async function newAgencyRegister(data) {
    try {
        const response = await AgencyRepo.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    newAgencyRegister,
}