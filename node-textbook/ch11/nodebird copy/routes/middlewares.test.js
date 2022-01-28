const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

// test는 if문 같은 것을 분기점으로 두는 것을 추천
// 그룹화
describe('isLoggedIn', () => {
  const res = {
    status: jest.fn(()=>res),
    send: jest.fn(),
  };
  const next = jest.fn(); // 가짜 함수를 하나 만듦. -> 가짜로 만드는 행위를 mocking이라 한다

  test('로그인 되어 있으면 isLoggedIn이 next호출', () => {
    const req = {
      isAuthenticated: jest.fn(()=>true),
    }; // 가짜 객체를 만듦
    isLoggedIn(req, res, next)
    expect(next).toBeCalledTimes(1); // isLoggedIn은 같다가 아니라 호출되었는지를 봐야한다., 진짜 req, res, next를 넣어주기 애매할 때는 가짜로 넣어준다.
  });
  
  test('로그인 되어 있지 않으면 isLoggedIn이 에러 호출', () => {
    const req = {
      isAuthenticated: jest.fn(()=>false),
    }; // 가짜 객체를 만듦
    isLoggedIn(req, res, next);
    expect(res.status).toBeCalledWith(403);
    expect(res.send).toBeCalledWith('로그인 필요'); // expect가 모두 만족해야 한다.
  });
})

describe('isNotLoggedIn', () => {
  const res = {
    redirect: jest.fn(),
  };
  const next = jest.fn();

  test('로그인 되어 있으면 isNotLoggedIn이 에러호출', () => {
    const req = {
      isAuthenticated: jest.fn(()=>true),
    }; // 가짜 객체를 만듦
    isNotLoggedIn(req, res, next);
    const message = encodeURIComponent('로그인한 상태');
    expect(res.redirect).toBeCalledWith(`/?error=${message}`);
  });
  
  test('로그인 되어 있지 않으면 isNotLoggedIn이 next호출', () => {
    const req = {
      isAuthenticated: jest.fn(()=>false),
    }; // 가짜 객체를 만듦
    isNotLoggedIn(req, res, next);
    expect(next).toBeCalledTimes(1);
  });
})
