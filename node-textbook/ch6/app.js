const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

const indexPath = path.join(__dirname, '/index.html');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json())


app.use((req, res, next) => {
  console.log('모든 요청에 다 실행!!');
  next();
});

app.get('/', (req, res, next) => {
  // res.send("Welcome to fantastic node world");
  req.cookies // { cookie : test }
  res.cookie('name', 'sangwoo', {
    expires: new Date() + 10000,
    httpOnly: true,
    path: '/',
  })

  // res.clearCookie('name', 'sangwoo', {
  //   httpOnly: true,
  //   path: '/',
  // })

  res.status(200).sendFile(indexPath);
  if (true) {
    next('route');
  } else{
    next();
  }

}, (req, res) => {
  console.log("next");
})

app.get('/', (req, res) => {
  res.status(200)
  console.log("next route");
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log('server is starting...')
}) 