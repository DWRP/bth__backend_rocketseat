const conn = require('../database/conn');

module.exports = {
    
    async index(req,res){
        const ong_id = req.headers.authorization;

        const cases = await conn('incidents').where('ong_id',ong_id).select('*');

        return res.send(cases);
    },

}