const Crud = require("./crud-repository");
const {Seat, sequelize} = require('../models');
const { generateSeatMap } = require("../utils/helpers/seatMapGenerate");

class SeatRepository extends Crud{
    constructor(){
        super(Seat);
    }

    async createSeatMap(data){
        const transaction = await sequelize.transaction();
        try {
            const seatObj = generateSeatMap(data.coachNo,data.row,data.column,data.totalSeats);
            const response = await Seat.bulkCreate(seatObj,{transaction:transaction});
            transaction.commit();
            return response;
        } catch (error) {
            transaction.rollback();
            throw error;
        }
    }
}

module.exports = SeatRepository;