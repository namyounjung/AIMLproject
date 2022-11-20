const USER_SYMBOL = Symbol("user");

const user = {
  getUser() {
    return global.globalThis[USER_SYMBOL];
  },
  setUser(user) {
    global.globalThis[USER_SYMBOL] = user;
  },
};

export default user;
