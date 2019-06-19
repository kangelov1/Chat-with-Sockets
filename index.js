const express = require('express')
const socket = require('socket.io')
const app = express()
app.listen(4000,function(){
    console.log('listening')
})

app.get('/',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<button">hi</button>')
})
app.use(express.static('public'))


var io = socket(server)

io.on('connection',function(socket){
   console.log('made socket connection')
   console.log(socket.id)
   socket.on('chat',function(data){
       console.log(data)
       io.sockets.emit('chat',data)
   })

   socket.on('typing',function(data){
       socket.broadcast.emit('typing',data)
   })
})
