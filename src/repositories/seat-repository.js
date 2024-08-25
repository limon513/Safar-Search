const Crud = require("./crud-repository");
const {Seat} = require('../models');

class SeatRepository extends Crud{
    constructor(){
        super(Seat);
    }

    async createSeatMap(data){
        try {
            const response = await Seat.bulkCreate(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SeatRepository;