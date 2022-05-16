const ticketSchema = require('../models/ticketSchema.js')

const ticketController = {
    getTicket : async(req,res)=>{
        try {
            const allTicket = await ticketSchema.find().populate("hotel")
            return res.status(200).json(allTicket)
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    postTicket : async(req,res)=>{
        const {username,hotel,email,phone,quantity,price}= req.body;
        try {
            const newTicket = new ticketSchema({
                username:username,
                hotel:hotel,
                email:email,
                phone:phone,
                quantity:quantity,
                price:price
            })
            await newTicket.save();
            return res.status(200).json(newTicket)
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    deleteTicket : async(req,res)=>{
        try { 
            await ticketSchema.findByIdAndDelete(req.params.id)
            return res.status(200).json("Delete success")
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}
module.exports = ticketController