const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

socket.bind(8081);


UDP client in terminal with need to type below command:
echo "hi" | nc -w1 -u 192.168.0.1 41234(internal IP add)

nc stands for netcat
W1 is for time delay in 1s
