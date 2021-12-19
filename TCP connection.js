const net = require("net")

const server = net.createServer(socket => {
    socket.write("Hello.")
    socket.on("data", data => {
        console.log(data.toString())
    })
})

server.listen(8080)

TCP command in terminal:
telnet 192.168.0.1 8080(port number)
