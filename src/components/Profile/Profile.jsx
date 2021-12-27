import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProfileInfo } from "../../model/profile";
import Container from "@mui/material/Container";
import TrumidPatch from "../../patchtrumid.svg";
import Trumid from "../../trumidavatarbadge.svg";
import AppBar from "../Dashboard/AppBar";
import { GridCard, GridContainer } from "../ReusedComponents/GridCard";
import { PageHeader } from "../ReusedComponents/PageHeader";
import { SectionHeader } from "../ReusedComponents/SectionHeader";

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
      <AppBar />

      <PageHeader title={name} subheader={title} />

      <Container maxWidth="lg">
        <SectionHeader
          icon={Trumid}
          badgeContent={profileInfo.badges.length}
        >
          Badges
        </SectionHeader>

        <GridContainer>
          {badgesWithSrc.map((item) => (
            <GridCard
              link={`/project/${item.id}`}
              title={item.name}
              subheader={item.title}
              image={item.url}
              imageTitle={item.title}
              toolTip={"click to view"}
            />
          ))}
        </GridContainer>

        <SectionHeader
          icon={TrumidPatch}
          badgeContent={profileInfo.projects.length}
        >
          Missions
        </SectionHeader>

        <GridContainer>
          {projectsWithSrc.map((item) => (
            <GridCard
              link={`/project/${item.id}`}
              title={item.name}
              subheader={item.desc}
              image={item.url}
              imageTitle={item.title}
              toolTip={"click to view"}
            />
          ))}
        </GridContainer>
      </Container>
    </div>
  );
}
