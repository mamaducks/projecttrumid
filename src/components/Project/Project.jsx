import Container from "@mui/material/Container";
import * as React from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProjectInfo } from "../../model/project";
import { GridContainer, GridCard } from "../ReusedComponents/GridCard";
import { PageHeader } from "../ReusedComponents/PageHeader";
import { SectionHeader } from "../ReusedComponents/SectionHeader";

export function Project() {
  const { projectId } = useParams();
  const projectInfo = useRecoilValue(getProjectInfo(projectId));

  const projectInfoWithSrc = useMemo(() => {
    const blob = new Blob([projectInfo.src], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    return { ...projectInfo, url };
  }, [projectInfo]);

  if (!projectInfo) {
    return <div>Project not found</div>;
  }

  console.log(projectInfo);

  const { name, desc, url, roles = [] } = projectInfoWithSrc;

  return (
    <div>
      <PageHeader
        image={url}
        imageTitle={name}
        header={name}
        subheader={desc}
      />

      

      <Container maxWidth="lg">
        
        {roles.map((item) => (
          <>
            <SectionHeader>{item.name}s</SectionHeader>

            <GridContainer>
              {item.people.map((item) => (
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
          </>
        ))}
      </Container>
    </div>
  );
}
