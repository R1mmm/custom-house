import { atom } from "recoil";

const prodList = atom({
  key: "prodList",
  default: [],
});

const userId = atom({
  key: "userId",
  default: null,
});

const userName = atom({
  key: "userName",
  default: null,
});

const userRoutines = atom({
  key: "userRoutines",
  default: null,
});

export { prodList, userId, userName, userRoutines };
