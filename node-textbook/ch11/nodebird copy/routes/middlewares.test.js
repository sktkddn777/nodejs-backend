const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

// 그룹화
describe('isLoggedIn', () => {
  test('로그인 되어 있으면 isLoggedIn이 next호출', () => {

  });
  
  test('로그인 되어 있지 않으면 isLoggedIn이 에러 호출', () => {
  
  });
})

describe('isNotLoggedIn', () => {
  test('로그인 되어 있으면 isNotLoggedIn이 에러호출', () => {

  });
  
  test('로그인 되어 있지 않으면 isNotLoggedIn이 next호출', () => {
  
  });
})
