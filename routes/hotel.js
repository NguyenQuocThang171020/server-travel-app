const express = require('express')
const hotelController = require('../controllers/hotelController')
const router = express.Router()

router.get('/hotels',hotelController.getAllHotel)
router.get('/hotels/:id',hotelController.getHotelByIdTravel)
router.get('/detail/:id',hotelController.getAHotel)
router.post('/create/hotel',hotelController.postAllHotel)

module.exports= router