const express = require('express');
const router = express.Router();
// var io = require('socket.io')(http)
// // io.origins('*:*')
// var mongoose = require('mongoose')
// mongoose.Promise = Promise
//
// var dbUrl = 'mongodb://localhost:27017/baduk_online'
//
// var Message = mongoose.model('Message', {
//     name: String,
//     message: String
// })
//
// app.get('/messages', (req, res) => {
//     Message.find({}, (err, messages) => {
//         res.send(messages)
//     })
// })
//
// app.get('/messages/:user', (req, res) => {
//     var user = req.params.user
//     Message.find({name: user}, (err, messages) => {
//         res.send(messages)
//     })
// })
//
// app.post('/messages', async (req, res) => {
//     try {
//         var message = new Message(req.body)
//
//         var savedMessage = await message.save()
//
//         console.log('saved')
//
//         var censored = await Message.findOne({ message: 'badword' })
//
//         if (censored)
//             await Message.remove({ _id: censored.id })
//         else
//             io.emit('message', req.body)
//
//         res.sendStatus(200)
//     } catch (error) {
//         res.sendStatus(500)
//         return console.error(error)
//     } finally {
//         console.log('message post called')
//     }
// })
//
//
//
// io.on('connection', (socket) => {
//     console.log('a user connected')
// })
//
// mongoose.connect(dbUrl, { useMongoClient: true }, (err) => {
//     console.log('mongo db connection', err)
// })
module.exports = router;