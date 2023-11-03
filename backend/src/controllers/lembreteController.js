const lembreteModel = require('../models/lembreteModel');

const getAll = async (request, response) => {

    const lembrete =  await lembreteModel.getAll();
    
    return response.status(200).json(lembrete);
};

module.exports = {
    getAll
};