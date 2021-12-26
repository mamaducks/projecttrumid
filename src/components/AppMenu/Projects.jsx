import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import {
  Card,
  CardContent,
  Container,
  CardHeader,
  Tooltip,
  Divider,
  Paper,
  Grid,
} from "@mui/material";
import TrumidArrow from "../../bluearrowright.svg";
import TrumidArrows from "../../orangearrowright.svg";
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
          <Grid item pb={10}>
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

          <Grid item display="flex" alignItems="center" justifyContent="center">
            <img
              src={TrumidArrows}
              alt="mission"
              height="30vw"
              width="auto"
              alignSelf="center"
            />

            <Box pl={2} typography="h3" color="#011e4b">
              Current Missions
            </Box>
          </Grid>

          <Divider sx={{ marginX: 16, mt: 1, mb: 5 }} />

          <Container sx={{ pt: 7 }} maxWidth="lg">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gridAutoFlow: "row",
              }}
            >
              {projectsWithSrc.map((item) => (
                <Grid item component={Card} xs sx={{ mb: 6 }}>
                  <Link href={`/project/${item.id}`} underline="none">
                    <CardHeader
                      titleTypographyProps={{
                        variant: "h5",
                        noWrap: "true",
                        color: "#fff",
                        mr: 8,
                        ml: 4,
                      }}
                      title={item.name}
                      subheaderTypographyProps={{
                        variant: "caption",
                        color: "#ff9100",
                        noWrap: "true",
                        mr: 8,
                        ml: 4,
                      }}
                      subheader={item.desc}
                      sx={{
                        backgroundColor: "#011e4b",
                        width: "100%",
                        height: "3vw",
                        borderBottom: "3px solid ",
                        borderColor: "#ff9100",
                        pt: 3,
                        pb: 2,
                        margin: "auto",
                        display: "block",
                        pl: 2,

                        marginTop: "30",
                      }}
                    />
                    <Tooltip title="click to view">
                      <CardMedia
                        sx={{
                          objectFit: "contain",
                          width: "100%",
                          height: "9vw",
                          marginTop: "10px",
                          marginBottom: "5px",

                          justifyContent: "center",
                        }}
                        component="img"
                        height="auto"
                        width="auto"
                        image={item.url}
                        alt={item.title}
                      />
                    </Tooltip>
                  </Link>
                </Grid>
              ))}
            </Box>
          </Container>
        </Paper>
      </Box>
    </div>
  );
}
