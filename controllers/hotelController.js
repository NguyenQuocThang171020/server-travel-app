const hotelSchema = require("../models/HotelSchema.js");
const travelSchema = require('../models/TravelSchema.js');
const hotelController = {
  getAllHotel: async(req, res) => {
    try {
      const allHotel = await hotelSchema.find();
      return res.status(200).json(allHotel);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  getHotelByIdTravel:async(req,res)=>{
    try {
      const hotel = await travelSchema.findById(req.params.id).populate("hotel");
      return res.status(200).json(hotel)
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  getAHotel:async(req,res)=>{
    try {
      const Ahotel = await hotelSchema.findById(req.params.id)
      return res.status(200).json(Ahotel)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
  ,
  postAllHotel: async(req, res) => {
    const { name, desc, price, image, state,travel } = req.body;
    try {
      const newHotel = new hotelSchema({
        name: name,
        desc: desc,
        price: price,
        image: image,
        state: state,
        travel: travel
      });
      await newHotel.save();
      return res.status(200).json(newHotel);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

module.exports = hotelController;
