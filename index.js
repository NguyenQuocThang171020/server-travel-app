const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const hotelRouter = require('./routes/hotel.js')
const travelRouter = require('./routes/travel.js')
const userRouter = require('./routes/user.js')
const ticketRouter = require('./routes/ticket.js')
app.use(cors());
app.use(bodyParser.json()); 

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.70sku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log('Connect DB success')).catch((err)=>console.log(err));

app.use('/api',hotelRouter)
app.use('/v1',travelRouter)
app.use('/auth',userRouter)
app.use('/admin',ticketRouter)

app.listen(process.env.PORT || 8080,()=>{
    console.log('Server is running');
})