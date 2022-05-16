const mongoose = require('mongoose');
const Schema = mongoose.Schema

const HotelSchema = new Schema({
    name : {
        type:String,
        require:true
    },
    desc : {
        type:String
    },
    price:{
        type:String,
        require:true
    },
    image:{
        type: [String]
    },
    state:{
        type:String,
        enum:['Còn phòng','Hết phòng']
    },
    travel:{
        type:Schema.Types.ObjectId,
        ref:'travel'
    }    
})
module.exports = mongoose.model('hotel',HotelSchema)