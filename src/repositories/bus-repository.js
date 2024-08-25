const Crud = require("./crud-repository");
const {Bus, sequelize} = require('../models');
const { generateSeatMap } = require("../utils/helpers/seatMapGenerate");
const SeatRepository = require("./seat-repository");

const SeatRepo = new SeatRepository();

class BusRepository extends Crud{
    constructor(){
        super(Bus);
    }

    async newBusRegister(data){
        const transaction = await sequelize.transaction();
        try {
            const bus = await Bus.create(data,{transaction:transaction});
            const seatObj = generateSeatMap(bus.coachNo,
                                            data.row,
                                            data.column,
                                            data.totalSeats);
            seatObj.forEach(async (data)=>{
                await SeatRepo.create(data,{transaction:transaction});
            });
            transaction.commit();
            return bus;
        } catch (error) {
            transaction.rollback();
            throw error;
        }
    }
}

module.exports = BusRepository;