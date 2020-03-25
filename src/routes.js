const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const router = express.Router();

router.get("/",(req,res)=>res.send({"welcome":"in BTH_API"}));

router.get("/ongs",OngController.index);

router.post("/ongs",OngController.store);

router.get("/incident",IncidentController.index);

router.post("/incident",IncidentController.store);

router.delete("/incident/:id",IncidentController.delete);

module.exports = router;