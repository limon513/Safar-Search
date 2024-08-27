const Crud = require("./crud-repository");
const {Trip,Agency,Bus,City,Terminal, sequelize, Sequelize} = require('../models');
const { Op } = require("sequelize");

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

    async getAllTrips(customFilter,sortFilter){
        try {
            const response = await Trip.findAll({
                where:{
                    [Op.and]:[
                        customFilter.departureDate?{departureDate:customFilter.departureDate}:undefined,
                        customFilter.departureTime?{departureTime:customFilter.departureTime}:undefined,
                    ]
                },
                order:sortFilter,
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
                        },
                        where: customFilter.busType?{busType:customFilter.busType}:undefined,
                    },
                    {
                        model:City,
                        required:true,
                        as:'departureCity', 
                        where: customFilter.cityCode1?{cityCode:customFilter.cityCode1}:undefined,
                    },
                    {
                        model:City,
                        required:true,
                        as:'arrivalCity',
                        where: customFilter.cityCode2?{cityCode:customFilter.cityCode2}:undefined,
                    },
                    {
                        model:Terminal,
                        required:true,
                    }
                ],
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = TripRepository;