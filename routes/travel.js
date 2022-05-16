const express = require('express')
const router = express.Router()
const travelController = require('../controllers/travelControler.js')
router.get('/travel',travelController.getAllTravel)
router.post('/create/travel',travelController.postTravel)
module.exports = router