const Crud = require("./crud-repository");
const {Bus} = require('../models');

class BusRepository extends Crud{
    constructor(){
        super(Bus);
    }
}

module.exports = BusRepository;