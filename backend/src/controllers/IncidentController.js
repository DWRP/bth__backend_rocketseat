const conn = require('../database/conn');

module.exports = {
    
    async index(req,res){
        const cases = await conn('incidents').select('*');

        return res.send(cases);
    },

    async store(req,res){

        const {title,description,value} = req.body;
        const ong_id = req.headers.authorization;

        const [id] = await conn('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return res.send({id})
    },
    async delete(req,res){
        const {id} = req.params;
        const ong_id = req.headers.authorization;

        const cases = await conn('incidents')
            .where('id',id)
            .select('ong_id')
            .first();
        
        if (cases.ong_id !== ong_id){

            return res.status(401).send({error:"Operation not permited"});
        }
        
        await conn('incidents')
            .where('id',id)
            .delete();

        return res.status(204).send();
    },

}