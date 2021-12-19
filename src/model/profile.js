import { selector, selectorFamily } from "recoil";
import { app } from "./app";
import { compact } from "lodash";

export const getAllProfileInfos = selector({
  key: "getAllProfileInfos",
  get: ({ get }) => {
    const { people, projects, roles, badges } = get(app);

    return people.map((person) => {
      const returnPerson = { ...person };

      const personalBadges = [...person.badges];

      personalBadges.unshift({ badgeId: "team-member", desc: "Trumid Member" });

      returnPerson.badges = compact(
        personalBadges.map((badgeInfo) => {
          const badge = badges.find((item) => item.id === badgeInfo.badgeId);

          return !badge ? undefined : { ...badgeInfo, ...badge };
        })
      );

      returnPerson.projects = compact(
        (person.projects || []).map((projectInfo) => {
          const project = projects.find(
            (item) => item.id === projectInfo.projectId
          );

          if (!project) {
            return undefined;
          }

          const rolesInfo = compact(
            (projectInfo.roles || []).map((roleId) =>
              roles.find((item) => item.id === roleId)
            )
          );

          return !project
            ? undefined
            : { ...projectInfo, ...project, roles: rolesInfo };
        })
      );

      return returnPerson;
    });
  },
});

export const getProfileInfo = selectorFamily({
  key: "getProfileInfo",
  get:
    (profileId) =>
    ({ get }) => {
      return get(getAllProfileInfos).find((item) => item.id === profileId);
    },
});
