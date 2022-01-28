const { addFollowing } = require('./user');
jest.mock('../models');
const { User } = require('../models');

describe('addFollowing', () => {
  const req = {
    user: { id: 1 },
    params: { id: 2 },
  };
  const res = {
    status: jest.fn(()=> res),
    send: jest.fn(),
  };
  const next = jest.fn();
  test('사용자를 찾아 팔로잉을 추가하고 success를 응답', async() => {
    User.findOne.mockReturnValue(Promise.resolve({ 
      id: 1, 
      addFollowings(value) {
        return Promise.resolve(true);
      }
    }));
    await addFollowing(req, res, next);
    expect(res.send).toBeCalledWith('success');
  })
  test('사용자를 못찾으면 res.status(404).send(no such user...)를 호출', async() => {
    User.findOne.mockReturnValue(Promise.resolve(null));
    await addFollowing(req, res, next);
    expect(res.status).toBeCalledWith(404);
    expect(res.send).toBeCalledWith('no such user...');
  })
  test('DB에러가 발생하면 next(error)호출', async() => {
    const error = 'test용 error';
    User.findOne.mockReturnValue(Promise.reject(error)); // reject 해주면 catch로 간다.
    await addFollowing(req, res, next);
    expect(next).toBeCalledWith(error);
  })
  
})