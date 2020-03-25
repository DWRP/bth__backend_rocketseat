require('dotenv').config();

const crypto = require('crypto');

const conn = require('../database/conn');

function passEncrypt(password){
    const cipher = crypto.createCipher(process.env.CRIPTO_ALG,process.env.CRIPTO_KEY);
    cipher.update(password);
    return cipher.final(process.env.CRIPTO_TP);
}

module.exports = {
    
    async index(req,res){
        const ongs = await conn('ongs').select('*');

        return res.send(ongs);
    },

    async store(req,res){
        const id = crypto.randomBytes(5).toString('HEX');
        const {name,email,whatsapp,city,uf} = req.body;
        const password = await passEncrypt(req.body.password);

        await conn('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
            password
        });
        return res.send({id})
    }

}