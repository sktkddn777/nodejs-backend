const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const { User } = require('../models/index');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id); // session에 user의 id만 저장
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      where : { id },
      include: [{
        model: User,
        attributes: ['id', 'nick', 'email'],
        as: 'Followers',
      }, {
        model: User,
        attributes: ['id', 'nick', 'email'],
        as: 'Followings',
      }],
    })
    .then(user => done(null, user)) // req.user 로 접근 가능(로그인한 사용자의 정보), req.user, req.isAuthenticated가 생성된다. 
    .catch(err => done(err));
  });

  local();
  kakao();
};