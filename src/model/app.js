import { atom } from "recoil";
import { model } from "./mock";

export const app = atom({
  key: "app",
  default: model,
});
