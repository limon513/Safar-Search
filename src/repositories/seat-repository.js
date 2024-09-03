const Crud = require("./crud-repository");
const {Seat, sequelize} = require('../models');
const { generateSeatMap } = require("../utils/helpers/seatMapGenerate");
const {Transaction, Op} = require('sequelize');
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

    async blockSeats(seatIds){
        const seats = (seatIds.split(',')).map(Number);
        console.log('inside repo',seats);
        const transaction = await sequelize.transaction();
        try {
            const response = await this.changeSeatStatus(seats,Enums.SeatStat.BLOCKED,transaction);
            console.log('successfully blocked seats');
            transaction.commit();
            return {
                status:true,
                msg: 'Successfully blocked seats',
            }
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async bookSeats(seatIds){
        const seats = (seatIds.split(',')).map(Number);
        console.log('inside repo',seats);
        const transaction = await sequelize.transaction();
        try {
            const response = await this.changeSeatStatus(seats,Enums.SeatStat.BOOKED,transaction);
            console.log('successfully booked seats');
            transaction.commit();
            return {
                status:true,
                msg: 'Successfully booked seats',
            }
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async clearSeats(seatIds){
        const seats = (seatIds.split(',')).map(Number);
        console.log('inside repo',seats);
        const transaction = await sequelize.transaction();
        try {
            const response = await this.changeSeatStatus(seats,Enums.SeatStat.AVAILABLE,transaction);
            console.log('successfully cleared seats');
            transaction.commit();
            return {
                status:true,
                msg: 'Successfully cleared seats',
            }
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async resetSeats(coachNo){
        const transaction = await sequelize.transaction();
        try {
            const response = await Seat.findAll({
                where:{
                    [Op.and]:{
                        coachNo:coachNo,
                        [Op.not]:{
                            seatStatus:Enums.SeatStat.AVAILABLE
                        }
                    }
                }
            });
            console.log('seats',response);
            const seatIds = [];
            response.forEach((seat)=>seatIds.push(seat.id));
            const result = await this.changeSeatStatus(seatIds,Enums.SeatStat.AVAILABLE,transaction);
            transaction.commit();
            return result;
        } catch (error) {
            transaction.rollback();
            throw error;
        }
    }

    

    async changeSeatStatus(seatIds,changedStatus,t){
        try {
            for(const seat of seatIds){
                const response = await Seat.findByPk(seat,{
                    lock: t.LOCK.UPDATE,
                    transaction:t, 
                });
                if(!response) throw new AppError(['no seat found'],StatusCodes.NOT_FOUND);
                if(changedStatus == Enums.SeatStat.BLOCKED && response.seatStatus != Enums.SeatStat.AVAILABLE){
                    throw new AppError([`sorry! seat is already ${changedStatus} choose another one`],StatusCodes.CONFLICT);
                }
                if(changedStatus == Enums.SeatStat.BOOKED && response.seatStatus != Enums.SeatStat.BLOCKED){
                    throw new AppError([`sorry! seat is already ${changedStatus} choose another one`],StatusCodes.CONFLICT);
                }
                response.seatStatus = changedStatus;
                await response.save({transaction:t});
            }
            return true;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = SeatRepository;