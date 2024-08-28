const { Op, where } = require('sequelize');
const {Terminal} = require('../models')
const Crud = require("./crud-repository")

class TerminalRepository extends Crud{
    constructor(){
        super(Terminal);
    }

    async getTerminalsById(Ids){
        try {
            const response = await Terminal.findAll({
                where:{
                    id:{
                        [Op.in]:Ids
                    }
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTerminalByCity(id){
        try {
            const response = await Terminal.findAll({
                where:{
                    cityId:id,
                }
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = TerminalRepository;