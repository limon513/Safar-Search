const Crud = require("./crud-repository");
const {Bus, sequelize} = require('../models');
const SeatRepository = require("./seat-repository");
const {Transaction, where} = require('sequelize');

const SeatRepo = new SeatRepository();

class BusRepository extends Crud{
    constructor(){
        super(Bus);
    }

    async newBusRegister(data){
        const transaction = await sequelize.transaction();
        try {
            const bus = await Bus.create(data,{transaction:transaction});
            const seat = await SeatRepo.createSeatMap({
                ...data, coachNo:bus.coachNo
            },transaction);
            await transaction.commit();
            return {
                bus:bus,
                seatMap:seat,
            }
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async getBusesbyAgency(id){
        try {
            const response = await Bus.findAll({
                where:{
                    agencyId:id,
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = BusRepository;