const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const PORT = process.env.APP_PORT || 3003

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
    }
})
io.on('connection', (socket) =>{
    console.log('connected to socket.io');
    socket.on('send message', data => {
        io.emit('received message', data)
    })
})
httpServer.listen(PORT,()=>{
    console.log(`Server API listening on ${PORT}`);
})

