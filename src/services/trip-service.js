const {TripRepository} = require('../repositories');

const TripRepo = new TripRepository();

async function newTripRegister(data) {
    try {
        const response = await TripRepo.newTripRegister(data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function getAllTrips() {
    try {
        const response = await TripRepo.getAllTrips();
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    newTripRegister,
    getAllTrips,
}