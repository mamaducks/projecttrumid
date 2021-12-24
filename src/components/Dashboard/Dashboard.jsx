import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import {
  Card,
  CardContent,
  Divider,
  Link,
  CardMedia,
  Grid,
} from "@mui/material";
import { useMemo } from "react";

import { useRecoilValue } from "recoil";

import Trumid from "../../trumid.svg";

import AppBar from "./AppBar";
import { getAllProjectInfos } from "../../model/project";
import { getAllProfileInfos } from "../../model/profile";
import TrumidArrows from "../../orangearrowright.svg";
import TrumidArrowsBlue from "../../bluearrowright.svg";

function ShuffleArray() {
  const projectsRandom = useRecoilValue(getAllProjectInfos);

  for (let i = projectsRandom.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [projectsRandom[i], projectsRandom[j]] = [
      projectsRandom[j],
      projectsRandom[i],
    ];
  }
}

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
      <AppBar />

      <Container>
        <Grid item>
          <Box alignItems="center">
            <CardContent
              sx={{
                display: "flex",
                color: "primary",
                justifyContent: "center",
                alignContent: "center",
                pt: 15,
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
      </Container>

      <Container sx={{ pt: 20 }}>
        <Box marginLeft={8} pl={3} fontSize="2rem" lineHeight={1}>
          <img
            src={TrumidArrows}
            alt="mission"
            width={27}
            height={27}
            alignSelf="center"
          />
          Current Missions
        </Box>
        <Divider sx={{ mt: 1, mb: 5 }} />
        <Grid
          container
          sx={{
            justifyContent: "center",
            paddingY: 2,
            paddingX: 5,
            boxSizing: "border-box",
          }}
        ></Grid>

        <Grid
          container
          sx={{
            justifyContent: "space-around",
            paddingY: 2,
            paddingX: 5,
            boxSizing: "border-box",
          }}
        >
          {projectsWithSrc.map((item) => (
            <Stack spacing={3} sx={{ justifyContent: "space-evenly" }}>
              <Card sx={{ boxShadow: 3, width: "auto", pb: 1 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    color: "primary",
                    justifyContent: "center",
                    alignContent: "center",

                    pt: 5,
                  }}
                >
                  <div>
                    <Link href={`/project/${item.id}`}>
                      <CardMedia
                        component="img"
                        image={item.url}
                        alt={item.title}
                        sx={{ objectFit: "unset", gap: 3, width: "auto" }}
                      />
                    </Link>
                  </div>

                  <CardContent>
                    <Box typography="h4" fontWeight="bold" color="#011e4b">
                      <Link href={`/project/${item.id}`} underline="none">
                        {" "}
                        {item.name}
                      </Link>
                    </Box>

                    <Box
                      typography="h6"
                      color="#ff9100"
                      pl={1}
                      sx={{ overflow: "hidden", flexWrap: "noWrap" }}
                    >
                      {item.desc}
                    </Box>
                  </CardContent>
                </CardContent>
              </Card>
            </Stack>
          ))}
        </Grid>
      </Container>

      <Container sx={{ pt: 12 }}>
        <Box marginLeft={8} pt={7} pl={3} fontSize="2rem" lineHeight={1}>
          <img
            src={TrumidArrows}
            alt="mission"
            width={27}
            height={27}
            alignSelf="center"
          />{" "}
          Team Members
        </Box>
        <Divider sx={{ mt: 1, mb: 5 }} />

        <Grid
          container
          sx={{
            justifyContent: "center",
            paddingY: 2,
            paddingX: 5,
            boxSizing: "border-box",
          }}
        ></Grid>

        <Grid
          container
          sx={{
            justifyContent: "space-around",
            paddingY: 2,
            paddingX: 5,
            boxSizing: "border-box",
          }}
        >
          {people.map((item, index) => (
            <Stack spacing={3} sx={{ justifyContent: "space-evenly" }}>
              <Card sx={{ boxShadow: 3, width: "auto", pb: 1 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    color: "primary",
                    justifyContent: "center",
                    alignContent: "center",

                    pt: 5,
                  }}
                >
                  <Link href={`/profile/${item.id}`}>
                    <CardMedia
                      component="img"
                      image={index % 2 ? TrumidArrows : TrumidArrowsBlue}
                      alt="trumidarrow"
                      sx={{ objectFit: "unset", gap: 3, height: "auto" }}
                    />
                  </Link>

                  <CardContent>
                    <Box typography="h4" fontWeight="bold" color="#011e4b">
                      <Link href={`/profile/${item.id}`} underline="none">
                        {item.name}
                      </Link>
                    </Box>
                    <div>
                      <Box
                        typography="h6"
                        color="#ff9100"
                        pl={1}
                        sx={{ overflow: "hidden", flexWrap: "noWrap" }}
                      >
                        {item.title}
                      </Box>
                    </div>
                  </CardContent>
                </CardContent>
              </Card>
            </Stack>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
