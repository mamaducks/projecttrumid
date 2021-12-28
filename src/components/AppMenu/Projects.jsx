import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { getAllProjectInfos } from "../../model/project";
import { GridCard, GridContainer } from "../ReusedComponents/GridCard";
import { PageHeader, ProjectHeader } from "../ReusedComponents/PageHeader";
import TrumidPatch from "../../patchtrumid.svg"
export function Projects() {
  const projects = useRecoilValue(getAllProjectInfos);

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

        <Paper square={true}>
          <PageHeader image={TrumidPatch} imageTitle="Mssion" header="Trumid Center" subheader="Our Missions" />
          <GridContainer>
            {projectsWithSrc.map((item) => (
              <GridCard
                link={`/project/${item.id}`}
                title={item.name}
                // subheader={item.desc}
                image={item.url}
                imageTitle={item.title}
                toolTip={item.desc}
                bottomText={item.desc}
              />
            ))}
          </GridContainer>
        </Paper>
    </div>
  );
}
