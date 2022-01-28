const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../app');

beforeAll(async () => {
  await sequelize.sync();
})

describe('POST /login', () => {
  test('로그인 수행', async (done) => {
    request(app) // supertest안에 express app을 넣어준다.
      .post('/auth/login') // app라우터에서 post auth login한 효과가 난다.
      .send({
        email: 'sangwoo@naver.com',
        password: '1111',
      })
      .expect('Location', '/')
      .expect(302, done);
  })
});

