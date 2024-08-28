const { TerminalRepository } = require("../repositories");

const TerminalRepo = new TerminalRepository();

async function getTerminalsById(IdsString) {
    const Ids = (IdsString.split(',')).map((id)=>parseInt(id));
    try {
        const response = await TerminalRepo.getTerminalsById(Ids);
        return response;
    } catch (error) {
        throw error;
    }
}

async function getTerminalByCity(id) {
    try {
        const response = await TerminalRepo.getTerminalByCity(id);
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getTerminalsById,
    getTerminalByCity,
}