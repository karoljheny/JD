const conexao = require('./conexao');

const getAll = async () => {
    const lembrete =  await conexao.execute('SELECT * FROM lembrete');
    return lembrete;
};

module.exports = (
    getAll 
);