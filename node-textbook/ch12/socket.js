
const SocketIO = require('socket.io');
const axios = require('axios');
const cookieParser = require('cookie-parser');

// 계층
// io > 네임스페이스 > room
// socket id를 이용하여 1대1 채팅도 가능하다.

module.exports = (server, app, sessionMiddleware) => {
  const io = SocketIO(server, {path: '/socket.io'}); //socketio server랑 express server랑 연결 시키면 socketio서버가 express에 /socket.io/socket.io.js 준다.
  app.set('io', io); // req.app.get('io') 처럼 라우터에서 socketio객체를 사용할 수 있다. 
  const room = io.of('/room'); // 네임스페이스 구분
  const chat = io.of('/chat');
  
  const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
  chat.use(wrap(cookieParser(process.env.COOKIE_SECRET)));
  chat.use(wrap(sessionMiddleware));

  room.on('connection', (socket) => {
    console.log('room 네임스페이스에 접속');
    socket.on('disconnect', () => { // 연결 종료 시
      console.log('room 네임스페이스에 접속 해제');
    });
  });

  chat.on('connection', (socket) => {
    console.log('chat 네임스페이스에 접속');
    const req = socket.request;
    const { headers: { referer } } = req;
    console.log('refere', referer);

    const roomId = referer
      .split('/')[referer.split('/').length - 1]
      .replace(/\?.+/, '');
    socket.join(roomId);
    socket.to(roomId).emit('join', {
      user: 'system',
      chat: `${req.session.color}님이 입장하셨습니다.`,
    })

    socket.on('disconnect', () => { // 연결 종료 시
      console.log('chat 네임스페이스에 접속 해제');
      socket.leave(roomId);

      const currentRoom = socket.adapter.rooms[roomId];
      const userCount = currentRoom ? currentRoom.length : 0;

      if (userCount === 0) {

      } else {
        socket.to(roomId).emit('exit', {
          user: 'system',
          chat: `${req.session.color}님이 퇴장하였습니다.`,
        });
      }
    });
  });
};

// socket.emit('news', 'Hello Socket.IO'); // 이벤트 이름, 메시지 (news라는 이벤트에 Hello Socket.IO를 보내라)
