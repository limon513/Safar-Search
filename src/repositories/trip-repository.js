const Crud = require("./crud-repository");
const {Trip,Agency,Bus,City,Terminal, sequelize, Sequelize} = require('../models');

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

    async getAllTrips(){
        try {
            const response = await Trip.findAll({
                include:[
                    {
                        model:Agency,
                        required:true,
                    },
                    {
                        model:Bus,
                        required:true,
                        on:{
                            col1: Sequelize.where(
                                Sequelize.col("Trip.coachNo"),
                                "=",
                                Sequelize.col("Bus.coachNo")
                            )
                        }
                    },
                    {
                        model:City,
                        required:true,
                        as:'departureCity'
                    },
                    {
                        model:City,
                        required:true,
                        as:'arrivalCity'
                    },
                    {
                        model:Terminal,
                        required:true,
                    }
                ]
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = TripRepository;