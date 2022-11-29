import { atom } from "recoil";

const prodList = atom({
  key: "prodList",
  default: [],
});

export { prodList };
