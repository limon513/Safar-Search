const Crud = require("./crud-repository");
const {Trip,Bus,City,Terminal,Seat,sequelize, Sequelize} = require('../models');
const { Op } = require("sequelize");

class TripRepository extends Crud{
    constructor(){
        super(Trip);
    }

    async newTripRegister(data,transaction){
        try {
            const response = await Trip.create(data,{transaction:transaction});
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTripsForRegistration(coachNo,departureDate){
        try {
            const response = await Trip.findAll({
                where:{
                    [Op.and]:[
                        {coachNo:coachNo},
                        {
                            departureDate:{
                                [Op.gte]:departureDate,
                            }
                        }
                    ]
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getAllTrips(customFilter,sortFilter){
        try {
            const response = await Trip.findAll({
                attributes:{
                    exclude:['agencyId','createdAt','updatedAt']
                },
                where:{
                    [Op.and]:[
                        customFilter.departureDate?{departureDate:customFilter.departureDate}:undefined,
                        customFilter.departureTime?{departureTime:customFilter.departureTime}:undefined,
                    ]
                },
                include:[
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
                        include:[
                            {
                                model:Seat,
                                attributes:[],
                                where:{seatStatus:'available'},
                                duplicating:false,
                            }
                        ],
                        attributes:{
                            include:[
                                [sequelize.fn('COUNT', sequelize.col('Bus->Seats.id')),'availableSeats']
                            ],
                            exclude:['agencyId','row','column','createdAt','updatedAt']
                        }
                    },
                    {
                        model:City,
                        required:true,
                        as:'departureCity', 
                        where: customFilter.cityCode1?{cityCode:customFilter.cityCode1}:undefined,
                        attributes:{
                            exclude:['createdAt','updatedAt']
                        }
                    },
                    {
                        model:City,
                        required:true,
                        as:'arrivalCity',
                        where: customFilter.cityCode2?{cityCode:customFilter.cityCode2}:undefined,
                        attributes:{
                            exclude:['createdAt','updatedAt']
                        }
                    },
                    {
                        model:Terminal,
                        required:true,
                        attributes:{
                            exclude:['createdAt','updatedAt']
                        }
                    },
                ],
                group:['Trip.id','Bus.coachNo'],
                order:sortFilter,
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = TripRepository;