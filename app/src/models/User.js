"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const body = this.body;
    const { id, pw } = await UserStorage.getUserInfo(body.id);
    console.log(id, pw);
    if (id) {
      if (id === body.id && pw === body.pw) {
        return { success: true };
      }
      return { success : false, msg : "failed to login" };
    }
    return { success : false, msg : "id not exist" };
  }

  register() {
    const body = this.body;
    const response = UserStorage.save(body);
    return response;
  }
}


module.exports = User;