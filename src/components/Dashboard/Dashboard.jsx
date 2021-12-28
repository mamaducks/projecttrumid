import { Card, CardHeader, Divider, Grid, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { getAllProfileInfos } from "../../model/profile";
import { getAllProjectInfos } from "../../model/project";
import TrumidArrowsOrange from "../../orangearrowright.svg";
import TrumidPatch from "../../patchtrumid.svg";
import TrumidAvatar from "../../trumidavatarbadge.svg";
import {
  GridCard,
  GridContainer,
  PeopleCard,
} from "../ReusedComponents/GridCard";
import { PageHeader, ProjectHeader } from "../ReusedComponents/PageHeader";
import { SectionHeader } from "../ReusedComponents/SectionHeader";

export function DashboardNew() {
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
      <PageHeader
        image={TrumidPatch}
        imageTitle="Mssion"
        header="Trumid Center"
        subheader="Dashboard"
      />

      <Container>
        <SectionHeader>Recent Missions</SectionHeader>
      </Container>

      <GridContainer>
        {projectsWithSrc.map((item) => (
          <GridCard
            link={`/project/${item.id}`}
            title={item.name}
            // subheader={item.desc}
            image={item.url}
            imageTitle={item.title}
            toolTip="click to view"
            bottomText={item.desc}
          />
        ))}
      </GridContainer>

      <Container>
        <SectionHeader>Recent Members</SectionHeader>
      </Container>

      <GridContainer>
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
      </GridContainer>
    </div>
  );
}
