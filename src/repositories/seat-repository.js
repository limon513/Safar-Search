const Crud = require("./crud-repository");
const {Seat} = require('../models');

class SeatRepository extends Crud{
    constructor(){
        super(Seat);
    }

    async createSeatMap(data){
        try {
            return await Seat.bulkCreate(data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SeatRepository;