var app = require('express')();
var http = require('http').Server(app);
var io=require('socket.io')(http);
var port=process.env.port;

app.get('/',function(req,res){

    res.sendFile(__dirname+'/index.html');

});

io.on('connection', function(socket){
    console.log('user connected');
    socket.on('chat message', function(msg){
      io.emit('chat message',msg);
      console.log('msg:',msg);
    });
    socket.on('disconnect',function(){
    console.log('User disconnection');
    });
  });
      

http.listen(port,function(){
    console.log('Listening on Port');
});
