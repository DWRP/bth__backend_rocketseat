require('dotenv').config();

const crypto = require('crypto');

const conn = require('../database/conn');

function passEncrypt(password){
    const cipher = crypto.createCipher(process.env.CRIPTO_ALG,process.env.CRIPTO_KEY);
    cipher.update(password);
    return cipher.final(process.env.CRIPTO_TP);
}

module.exports = {

    async store(req,res){
        const {id} = req.body;
        const password = await passEncrypt(req.body.password);

        const ong = await conn('ongs')
            .where("id",id)
            .where("password",password)
            .select('name')
            .first();
        if (!ong){
            return res.status(404).send({error:"ONG NOT FOUND OR PASS WRONG"});
        }
        return res.send(ong);
    }

}