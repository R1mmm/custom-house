import { atom } from "recoil";

const prodList = atom({
  key: "prodList",
  default: [],
});

const userId = atom({
  key: "userId",
  default: null,
});

export { prodList, userId };
