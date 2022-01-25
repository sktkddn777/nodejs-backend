const express = require('express');
const axios = require('axios');

const router = express.Router();

const URL = 'http://localhost:8002/v2';
axios.defaults.headers.origin = 'http://localhost:4000'; // api서버 쪽에서 요청이 어디서 오는지 알 수 있게 해주기 위해 (브라우저에서 서버로 보낼 때는 브라우저에서 알아서 넣어서 보내준다.)

// nodebird api로 요청을 보내는 함수
const request = async (req, api) => { 
  console.log(req.session.jwt);
  try {
    if (!req.session.jwt) { // 세션에 토큰이 없으면 토큰 발급 시도
      const tokenResult = await axios.post(`${URL}/token`, {
        clientSecret: process.env.CLIENT_SECRET,
      });
      req.session.jwt = tokenResult.data.token; // 세션에 토큰 저장
    }   
    return await axios.get(`${URL}${api}`, {
      headers: { authorization: req.session.jwt },
    })
  } catch (error) {
    console.error(error);
    if (error.response.status === 419) { // 토큰 만료 시
      delete req.session.jwt;
      return request(req, api); // 재귀함수 처럼 토큰이 만료되었을 때, 다시 호출해서 토큰 발급 시도
    }
    return error.response;
  };
};

router.get('/mypost', async (req, res, next) => {
  try {
    const result = await request(req, '/posts/my');
    res.json(result.data);
  } catch(err) {
    console.error(err);
    next(err);
  }
});

router.get('/search/:hashtag', async (req, res, next) => {
  try {
    const result = await request(req, `/posts/hashtag/${encodeURIComponent(req.params.hashtag)}`);
    res.json(result.data);
  } catch(err) {
    console.error(err);
    next(err);
  }
});

router.get('/', (req, res) => { 
  res.render('main', {key: process.env.CLIENT_SECRET}); // 실제로는 보내면 안된다.... 실무에서는 프론트 용으로 다른 키 하나를 더 발급해줘야 한다. 서버에서 쓰는 용 하나 프론트용에서 쓰는 거 하나
})
module.exports = router;