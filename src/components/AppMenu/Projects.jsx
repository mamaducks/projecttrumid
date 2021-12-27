import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { getAllProjectInfos } from "../../model/project";
import AppBar from "../Dashboard/AppBar";
import { GridCard, GridContainer } from "../ReusedComponents/GridCard";
import { PageHeader } from "../ReusedComponents/PageHeader";

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
      <Box sx={{ backgroundColor: "#001e4b" }}>
        <AppBar />

        <Paper square={true}>
          <PageHeader title="Trumid Center" subheader="Mission Dashboard" />

          <GridContainer>
            {projectsWithSrc.map((item) => (
              <GridCard
                link={`/project/${item.id}`}
                title={item.name}
                subheader={item.desc}
                image={item.url}
                imageTitle={item.title}
              />
            ))}
          </GridContainer>
        </Paper>
      </Box>
    </div>
  );
}
