import * as React from "react";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import Container from "@mui/material/Container";
import { getAllProfileInfos } from "../../model/profile";
import { getAllProjectInfos } from "../../model/project";
import { PageHeader } from "../Headers/PageHeader";
import { SectionHeader } from "../Headers/SectionHeader";
import { GridCard } from "../Card/GridCard";
import { GridCardContainer } from "../Card/GridCardContainer";

export function Dashboard() {
  const projects = useRecoilValue(getAllProjectInfos);
  const people = useRecoilValue(getAllProfileInfos);

  const projectsWithSrc = useMemo(
    () =>
      projects.map((item) => {
        const blob = new Blob([item.src], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);

        return { ...item, url };
      }),
    [projects]
  );

  return (
    <div>
      <PageHeader header="Trumid Center" subheader="Dashboard" isTrumid />

      <Container>
        <SectionHeader label="Recent Missions"/>
      </Container>



      <GridCardContainer>
        {projectsWithSrc.map((item) => (
          <GridCard
            link={`/project/${item.id}`}
            title={item.name}
            image={item.url}
            imageTitle={item.title}
            toolTip="click to view"
            bottomText={item.desc}
          />
        ))}
      </GridCardContainer>

      <Container>
        <SectionHeader label="Recent Members"/>
      </Container>

      <GridCardContainer>
        {people.map((item) => (
          <GridCard
            link={`/profile/${item.id}`}
            title={item.name}
            subheader={item.title}
            projectsCount={item.projects.length}
            badgesCount={item.badges.length}
            isPeople
          />
        ))}
      </GridCardContainer>
    </div>
  );
}
