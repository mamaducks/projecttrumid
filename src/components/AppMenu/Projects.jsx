import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { Card, CardContent, Divider, Paper, Grid } from "@mui/material";
import TrumidArrow from "../../bluearrowright.svg";
import TrumidArrows from "../../trumidarrows.svg";
import { useMemo } from "react";
import CardMedia from "@mui/material/CardMedia";
import { getAllProjectInfos } from "../../model/project";
import AppBar from "../Dashboard/AppBar";
import Trumid from "../../trumid.svg";

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
        <AppBar />

        <Paper square={true}>
          <Grid item>
            <Box alignItems="center">
              <CardContent
                sx={{
                  display: "flex",
                  color: "primary",
                  justifyContent: "center",
                  alignContent: "center",
                  pt: 10,
                }}
              >
                <Box alignSelf="center" pr={4}>
                  <img
                    src={Trumid}
                    alt="mission"
                    width="80"
                    height="80"
                    alignSelf="center"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    flexDirection: "column",
                    color: "primary",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Box typography="h1" fontWeight="bold" color="#011e4b">
                    Trumid Center
                  </Box>

                  <Box typography="h3" color="#ff9100" pl={2}>
                    Missions and Badges
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
          <Box marginLeft={20} pt={7} pl={3} fontSize="2rem" lineHeight={1}>
            <img
              src={TrumidArrow}
              alt="mission"
              width={27}
              height={27}
              alignSelf="center"
            />{" "}
            Current Missions
          </Box>
          <Divider sx={{ marginX: 16, mt: 1, mb: 5 }} />
          {projectsWithSrc.map((item) => (
            <Card sx={{ width: "auto", justifyContent: "center" }}>
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
                  <Box typography="h2" color="#011e4b">
                    <Link href={`/project/${item.id}`} underline="none">
                      {item.name}
                    </Link>
                  </Box>

                  <Box typography="h5" color="#ff9100" flexWrap="wrap">
                    {item.desc}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
          s
        </Paper>
      </Box>
    </div>
  );
}
