const express = require('express');
const path = require('path'); 
const { nextTick } = require('process');

const app = express();

const index_path = path.join(__dirname, '/index.html')

app.use('/category',(req, res, next) => {
  console.log("모든 요청에 실행");
  next();
// }, (req, res, next) => {
//   try {
//     console.log(as);
//   } catch (error) {
//     next(error);
//   }
})

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res, next) {
  res.sendFile(index_path);
  next('route');
})

app.get('/', function (req, res) {
  console.log("실행됩니당")
})

app.get('/category/:name', function (req, res) {
  res.json({hello : `${req.params.name}`});
})

// app.get('*', (req, res) => {
//   res.send("bad request");
// })

app.use((req, res, next) => {
  res.send("404 났대용~")
})

// error 처리 미들웨어 모든 에러는 여기서 처리된다.
// error 미들웨어 매개변수 4개를 다 써줘야 한다.
app.use((err, req, res, next) => {
  console.error(err);
  res.send("에러 났대용~")
})

app.listen(app.get('port'), () => {
  console.log(`server is running on ${app.get('port')}`);
})