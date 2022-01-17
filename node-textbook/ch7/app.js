const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');
const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

// db 연결 sequelize를 통해
// 만들어둔 모델들은 sync되는 순간 알아서 생성된다.
sequelize.sync({ force: false })
.then(() => {
  console.log("connection database successful");
})
.catch((err) => {
  console.error(err);
});


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} router dosen't exist`);
  error.status = 404;
  next(error);
})

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.err = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(`waiting on ${app.get('port')} port...`)
})
