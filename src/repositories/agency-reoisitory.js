const Crud = require("./crud-repository");
const {Agency, sequelize} = require('../models');

class AgencyRepository extends Crud{
    constructor(){
        super(Agency);
    }
}

module.exports = AgencyRepository;