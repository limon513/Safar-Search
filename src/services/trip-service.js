const { Op } = require('sequelize');
const {TripRepository} = require('../repositories');
const { formatTime } = require('../utils/helpers/dateTimeCompare');
const AppError = require('../utils/errors/App-Error');
const { StatusCodes } = require('http-status-codes');

const TripRepo = new TripRepository();

async function newTripRegister(data) {
    try {
        const response = await TripRepo.newTripRegister(data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function getAllTrips(query) {
    let customFilter = {};
    let sortFilter = [];

    if(query.trip){
        [departure,arrival] = query.trip.split("-");
        customFilter.cityCode1 = departure;
        customFilter.cityCode2 = arrival;
    }

    if(query.b_type){
        customFilter.busType = query.b_type;
    }

    if(query.date){
        customFilter.departureDate = query.date;
    }

    if(query.time){
        [t1,t2]=query.time.split("-");
        customFilter.departureTime = {
            [Op.between]:[formatTime(t1),formatTime(t2)]
        }
    }

    if(query.sort){
        const params = query.sort.split(',');
        //console.log(params);
        const sortary = params.map((param)=>param.split('_'));
        //console.log(sortary);
        sortFilter = sortary;
    }

    try {
        const response = await TripRepo.getAllTrips(customFilter,sortFilter);
        if(!response || response.length <= 0) throw new AppError(['no trip found'],StatusCodes.NOT_FOUND);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    newTripRegister,
    getAllTrips,
}