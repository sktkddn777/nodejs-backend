const WebSocket = require('ws');
const requestIp = require('request-ip');

module.exports = (server) => {
  const wss = new WebSocket.Server( { server });

  wss.on('connection', (ws, req) => { // FE에서 new로 요청을 보냈을 때 호출
    const ip = req.headers['x-forwarded-for'] || requestIp.getClientIp(req); // ip파악
    console.log('새로운 클라이언트 접속', ip);
    ws.on('message', (message) => { // 클라이언트로 부터 메시지
      console.log(message);
    });
    ws.on('error', (err) => { // 에러
      console.error(err);
    });
    ws.on('close', () => { // 연결 종료
      console.log('클라이언트 접속 해제', ip);
      clearInterval(ws.interval);
    });

    ws.interval = setInterval(() => {
      if (ws.readyState === ws.OPEN) {
        ws.send('서버에서 클라이언트로 메시지를 보냅니다.');
      }
    }, 3000);
  }) ;
  
}

