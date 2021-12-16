import { selectorFamily } from "recoil";
import { app } from "./app";
import { compact } from "lodash";

export const profileInfo = selectorFamily({
  key: "profileInfo",
  get:
    (profileId) =>
    ({ get }) => {
      const { people, projects, roles, badges } = get(app);
      const person = people.find((item) => item.id === profileId);

      if (!person) {
        return undefined;
      }

      const returnPerson = { ...person };

      returnPerson.badges = compact(
        (person.badges || []).map((badgeInfo) => {
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
    },
});
