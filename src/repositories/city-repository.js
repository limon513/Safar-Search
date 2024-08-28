const {City} = require('../models')
const Crud = require("./crud-repository")

class CityRepository extends Crud{
    constructor(){
        super(City);
    }

    async getCities(){
        try {
            const response = await City.findAll();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = CityRepository;