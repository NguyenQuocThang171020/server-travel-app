const express = require('express')
const router = express.Router()
const ticketController = require('../controllers/ticketController.js')
router.get('/ticket',ticketController.getTicket)
router.post('/create',ticketController.postTicket)
router.delete('/delete/:id',ticketController.deleteTicket)
module.exports = router