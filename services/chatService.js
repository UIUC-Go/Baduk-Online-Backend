const {Message} = require('../models/schema')

module.exports = function (socket, io) {
    socket.on("new message", async (data) => {
        // let room_id = data.room_id
        let message = new Message()
        message.sentTime = new Date()
        message.message = data.message
        message.username = data.username
        message.room_id = data.room_id
        message.save()
        // socket.join(room_id)
        io.sockets.in(data.room_id).emit('new message', JSON.stringify(message))
    })

    // socket.on("disconnect", (data) => {
    //     console.log("disconnect is entered")
    //     socket.emit('info', {
    //         fieldName: 'username',
    //         username: data.username,
    //         description: 'current username disconnect'
    //     })
    //     socket.disconnect(0);
    //     console.log("disconnected");
    // });
};