const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const router = express.Router();

router.get("/",(req,res)=>res.send({"welcome":"in BTH_API"}));

router.post("/session",SessionController.store);

router.get("/ongs",OngController.index);
router.post("/ongs",OngController.store);

router.get("/incidents",IncidentController.index);
router.post("/incidents",IncidentController.store);
router.delete("/incidents/:id",IncidentController.delete);

router.get("/profile",ProfileController.index);


module.exports = router;