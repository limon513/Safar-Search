const Crud = require("./crud-repository");
const {Seat, sequelize} = require('../models');
const { generateSeatMap } = require("../utils/helpers/seatMapGenerate");
const {Transaction} = require('sequelize');
const AppError = require('../utils/errors/App-Error');
const { StatusCodes } = require("http-status-codes");
const { Enums } = require("../utils/common");

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

    async bookSeats(seatIds){
        const seats = (seatIds.split(',')).map(Number);
        console.log('inside repo',seats);
        const transaction = await sequelize.transaction();
        try {
            for(const seat of seats){
                console.log('inside',seat);
                const response = await Seat.findByPk(seat,{
                    lock: transaction.LOCK.UPDATE,
                    transaction:transaction, 
                });
                if(!response) throw new AppError(['no seat found'],StatusCodes.NOT_FOUND);
                if(response.seatStatus !== Enums.SeatStat.AVAILABLE) throw new AppError(['sorry! seat is already booked choose another one'],StatusCodes.CONFLICT);
                response.seatStatus = Enums.SeatStat.BLOCKED;
                await response.save({transaction:transaction});
            }
            await transaction.commit();
            console.log('successfull booked');
            return true;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

}

module.exports = SeatRepository;