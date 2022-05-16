const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  username: {
    type:String,
    require:true
  },
  hotel: {
    type:Schema.Types.ObjectId,
    ref:"hotel"
  },
  email:{
    type:String
  },
  phone:{
    type:String
  },
  quantity:{
    type:Number
  },
  price:{
    type:Number
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("ticket", ticketSchema);
