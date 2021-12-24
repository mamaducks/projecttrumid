import { getProjectInfo } from "../../model/project";
import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { Card, CardContent, Divider, Paper } from "@mui/material";
import TrumidArrow from "../../bluearrowright.svg";
import TrumidArrows from "../../trumidarrows.svg";
import { useMemo } from "react";
import CardMedia from "@mui/material/CardMedia";
import { getAllProjectInfos } from "../../model/project";

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

  console.log(projects);

  return (
    <div>
      <Box sx={{ backgroundColor: "#001e4b" }}>
        <Container>
          <Paper square={true}>
            {projectsWithSrc.map((item) => (
              <Card sx={{ width: "auto" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    color: "primary",
                    justifyContent: "center",
                    pt: 5,
                  }}
                >
                  <Link href={`/project/${item.id}`}>
                    <CardMedia
                      component="img"
                      image={item.url}
                      alt={item.name}
                      sx={{
                        objectFit: "unset",
                        gap: 3,
                        width: "auto",
                        alignSelf: "auto",
                      }}
                    />
                  </Link>

                  <Box alignSelf="center" pl={5}>
                    <Box typography="h1" color="#011e4b">
                      {item.name}
                    </Box>

                    <Box typography="h5" color="#ff9100">
                      {item.desc}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </Container>
      </Box>
    </div>
  );
}
