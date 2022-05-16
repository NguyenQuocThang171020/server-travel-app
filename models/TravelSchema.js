const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TravelSchema = new Schema({
    title : {
        type:String,
        require:true
    },
    desc : {
        type:String
    },
    image:{
        type: [String],
    },
    hotel:[
        {
            type:Schema.Types.ObjectId,
            ref:'hotel'
        }    
    ]
})
module.exports = mongoose.model('travel',TravelSchema)