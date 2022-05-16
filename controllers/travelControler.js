const travelSchema = require('../models/TravelSchema.js')

const travelController ={
    getAllTravel : async(req,res)=>{
        try {
            const allTravel = await travelSchema.find();
            res.status(200).json(allTravel)
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    postTravel: async(req,res)=>{
        const {title,desc,image,hotel} = req.body
        try {
            const newTravel = new travelSchema({
                title:title,
                desc:desc,
                image:image,
                hotel:hotel
            })
           await newTravel.save()
            res.status(200).json(newTravel)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = travelController