import { selector, selectorFamily } from "recoil";
import { app } from "./app";
import { cloneDeep } from "lodash";
import { getAllProfileInfos } from "./profile";
import { compact } from "lodash";

export const getAllProjectInfos = selector({
  key: "getAllProjectInfos",
  get: ({ get }) => {
    const { projects } = get(app);
    const allProfileInfos = get(getAllProfileInfos);

    const t = projects.map((project) => {
      const returnProject = { ...project };

      const rolesMap = new Map();

      allProfileInfos.forEach((profileInfo) => {
        const projectRef = profileInfo.projects.find(
          (item) => item.projectId === returnProject.id
        );

        projectRef?.roles?.forEach((role) => {
          if (!rolesMap.has(role.id)) {
            rolesMap.set(role.id, { ...role, people: [] });
          }

          const existingRoleEntry = cloneDeep(rolesMap.get(role.id));

          existingRoleEntry.people.push(profileInfo);

          rolesMap.set(role.id, existingRoleEntry);
        });
      });

      returnProject.roles = [...rolesMap.values()];

      return returnProject;
    });

    console.log(t);

    return t;
  },
});

export const getProjectInfo = selectorFamily({
  key: "getProjectInfo",
  get:
    (projectId) =>
    ({ get }) => {
      return get(getAllProjectInfos).find((item) => item.id === projectId);
    },
});

//whats up with that
// export const getTopProjects = selector({
//   key: "getTopProjects",
//   get: ({ get }) => {
//     const { people, projects, topProjects, roles, badges } = get(app);

//     return topProjects.map((project) => {
//       const returnTopProject = { ...project};

//       if (!project) {
//         return undefined;
//       }
// return returnTopProject;
//     }) 
//   }

// });

// export const getTopProjectInfo = selectorFamily({
//   key: "getTopProjectInfo",
//   get:
//     (projectId) =>
//     ({ get }) => {
//       return get(getTopProjects).find((item) => item.id === projectId);
//     },
// });