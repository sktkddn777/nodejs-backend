"use strict";

// 파일을 불러오기 위한 file system
const fs = require("fs").promises;
// 파일 명과 동일하게 해주는 것이 좋다.
// static : 클래스 자체에서 변수에 접근할 수 있게 해준다.
// 변수를 private하게 #
class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id)
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static getUsers(...fields) {
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs.readFile("./src/database/user.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error); 
  }

  static save(userInfo) {
    users.id.push(userInfo.id);
    users.pw.push(userInfo.pw);
    return { success: true };
  }
}

module.exports = UserStorage;