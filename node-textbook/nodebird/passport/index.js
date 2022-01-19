const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const db = require('../models/index');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); // session에 user의 id만 저장
  });

  passport.deserializeUser((id, done) => {
    db.User.findOne({where : { id }})
    .then(user => done(null, user)) // req.user 로 접근 가능(로그인한 사용자의 정보), 
    .catch(err => done(err));
  });

  local();
  kakao();
};