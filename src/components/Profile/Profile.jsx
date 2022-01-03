import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProfileInfo } from "../../model/profile";
import Container from "@mui/material/Container";
import TrumidPatch from "../../utilities/patchtrumid.svg";
import Trumid from "../../utilities/trumidavatarbadge.svg";
import { GridCard } from "../Card/GridCard";
import { GridCardContainer } from "../Card/GridCardContainer";
import { PageHeader } from "../Headers/PageHeader";
import { SectionHeader } from "../Headers/SectionHeader";

export function Profile() {
  const { profileId } = useParams();
  const profileInfo = useRecoilValue(getProfileInfo(profileId));

  const badgesWithSrc = useMemo(
    () =>
      profileInfo?.badges.map((item) => {
        const blob = new Blob([item.src], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);

        return { ...item, url };
      }),
    [profileInfo?.badges]
  );

  const projectsWithSrc = useMemo(
    () =>
      profileInfo?.projects.map((item) => {
        const blob = new Blob([item.src], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);

        return { ...item, url };
      }),
    [profileInfo?.projects]
  );

  if (!profileInfo) {
    return <div>User Profile not found</div>;
  }

  const { name, title } = profileInfo;

  return (
    <div>
      <PageHeader
        image={TrumidPatch}
        imageTitle={"missions"}
        header={name}
        subheader={title}
        // isCustom
      />

      <Container maxWidth="lg">
        <SectionHeader icon={Trumid} badgeContent={profileInfo.badges.length}>
          Badges
        </SectionHeader>

        <GridCardContainer>
          {badgesWithSrc.map((item) => (
            <GridCard
              title={item.name}
              image={item.url}
              imageTitle={item.title}
              bottomText={item.title}
              bottomSubText={profileInfo.badges.desc}
            />
          ))}
        </GridCardContainer>

        <SectionHeader
          icon={TrumidPatch}
          badgeContent={profileInfo.projects.length}
        >
          Missions
        </SectionHeader>

        <GridCardContainer>
          {projectsWithSrc.map((item) => (
            <GridCard
              link={`/project/${item.id}`}
              title={item.name}
              subheader={item.desc}
              image={item.url}
              imageTitle={item.title}
              toolTip={"click to view"}
              bottomText={item.desc}
            />
          ))}
        </GridCardContainer>
      </Container>
    </div>
  );
}
