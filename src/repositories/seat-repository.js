const Crud = require("./crud-repository");
const {Seat, sequelize} = require('../models');
const { generateSeatMap } = require("../utils/helpers/seatMapGenerate");
const {Transaction} = require('sequelize');

class SeatRepository extends Crud{
    constructor(){
        super(Seat);
    }

    async createSeatMap(data,transaction){
        try {
            const seatObj = generateSeatMap(data.coachNo,data.row,data.column,data.totalSeats);
            return await Seat.bulkCreate(seatObj,{transaction});
        } catch (error) {
            throw error;
        }
    }

    async getSeatMap(coachNo){
        try {
            const seatMap = await Seat.findAll({
                where:{
                    coachNo:coachNo,
                },
            });
            return seatMap;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = SeatRepository;