const { Op } = require('sequelize');
const {TripRepository} = require('../repositories');
const { formatTime, compareDate, getTodaysDateString, instantTimeString } = require('../utils/helpers/dateTimeCompare');
const AppError = require('../utils/errors/App-Error');
const { StatusCodes } = require('http-status-codes');
const SeatService = require('./seat-service');
const { sequelize } = require('../models');

const TripRepo = new TripRepository();

async function newTripRegister(data) {
    const transaction = await sequelize.transaction();
    try {
        const checkCoach = await getTripsForRegistration(data.coachNo,data.departureDate);
        const resetSeats = await SeatService.resetSeats(data.coachNo,transaction);
        const response = await TripRepo.newTripRegister(data,transaction);
        transaction.commit();
        return response;
    } catch (error) {
        transaction.rollback();
        throw error;
    }
}

async function getTripsForRegistration(coachNo,departureDate) {
    try {
        const response = await TripRepo.getTripsForRegistration(coachNo,departureDate);
        if(response && response.length > 0) throw new AppError(['This coach is already registered for a trip'],StatusCodes.BAD_REQUEST);
        return true;
    } catch (error) {
        throw error;
    }
}

async function getAllTrips(query) {
    let customFilter = {};
    let sortFilter = [];
    const lastTime = "23:59:59";

    if(query.trip){
        [departure,arrival] = query.trip.split("-");
        customFilter.cityCode1 = departure;
        customFilter.cityCode2 = arrival;
    }

    if(query.b_type){
        customFilter.busType = query.b_type;
    }

    if(!query.date){
        customFilter.departureDate = getTodaysDateString();
    }

    if(query.date){
        if(compareDate(query.date,new Date().getTime())) customFilter.departureDate = getTodaysDateString();
        else customFilter.departureDate = query.date;
    }

    if(query.time){
        
        [t1,t2]=query.time.split("-");
        const time1 = formatTime(t1);
        const time2 = formatTime(t2);
        const instantTime = instantTimeString();
        console.log(`time1${time1}time2${time2}time3${instantTime}`);
        if(time2 > time1 && time1>=instantTime || customFilter.departureDate > getTodaysDateString()){
            customFilter.departureTime = {
                [Op.between]:[time1,time2]
            }
        }
        else if(time2 > time1 && instantTime > time1 && instantTime < time2){
            customFilter.departureTime = {
                [Op.between]:[instantTime,time2]
            }
        }
        else if(time2 > time1 && instantTime >= time2){
            customFilter.departureTime = {
                [Op.between]:[instantTime,lastTime]
            }
        }
    }

    if(!query.time){
        const instantTime = instantTimeString();
        customFilter.departureTime = {
            [Op.between]:[instantTime,lastTime]
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
    getTripsForRegistration,
}