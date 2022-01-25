const jwt = require('jsonwebtoken');
const RateLimit = require('express-rate-limit');

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send('로그인 필요');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent('로그인한 상태');
    res.redirect(`/?error=${message}`);
  }
};

exports.verifyToken = (req, res, next) => {
  try {
    req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET); // token 검사, decoded안에 데이터가 담긴다. 
    return next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') { // 유효기간 초과
      return res.status(419).json({
        code: 419, // 419는 임의로 적어둔거여서 상관없음.
        message: '토큰이 만료되었습니다',
      });
    }
    return res.status(401).json({
      code: 401,
      message: '유효하지 않은 토큰입니다',
    });
  }
};

exports.apiLimiter = RateLimit({
  windowMs: 60 * 1000, // 1분에 1번
  max: 10,
  delayMs: 10000, // 호출 간격 1초간 term을 둬라
  handler(req, res) { //429
    res.status(this.statusCode).json({
      code: this.statusCode,
      message: '1분에 한번만 요청 가능...'
    }) 
  }
})

// 
exports.deprecated = (req, res) => {
  res.status(410).json({
    code: 410,
    message: '새로운 버전을 사용하세요',
  });
}