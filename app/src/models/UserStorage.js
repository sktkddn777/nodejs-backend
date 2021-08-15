"use strict";

// 파일 명과 동일하게 해주는 것이 좋다.
// static : 클래스 자체에서 변수에 접근할 수 있게 해준다.
// 변수를 private하게 #
class UserStorage {
  static #users = {
    id: ["user1", "user2", "user3"],
    pw: ["password1", "password2", "password3"],
    name: ["name1", "name2", "name3"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);

    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.pw.push(userInfo.pw);
    return { success: true };
  }
}

module.exports = UserStorage;