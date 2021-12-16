import { selectorFamily } from "recoil";
import { app } from "./app";

export const projectInfo = selectorFamily({
  key: "projectInfo",
  get:
    (projectId) =>
    ({ get }) => {
      const modelData = get(app);

      return modelData.projects.find((item) => item.id === projectId);
    },
});
