const Crud = require("./crud-repository");
const {Trip, sequelize} = require('../models');

class TripRepository extends Crud{
    constructor(){
        super(Trip);
    }

    async newTripRegister(data){
        try {
            const response = await Trip.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = TripRepository;