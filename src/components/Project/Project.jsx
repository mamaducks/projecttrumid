import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { CardContent, Divider, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProjectInfo } from "../../model/project";
import { ProfileAvatar } from "../Profile/ProfileAvatar";
import { useMemo } from "react";
import AppBar from "../Dashboard/AppBar";
import TrumidArrow from "../../bluearrowright.svg";
import TrumidArrows from "../../orangearrowright.svg";

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
    <Box sx={{ backgroundColor: "#001e4b" }}>
      <AppBar />
      <Container>
        <Paper square={true}>
          <CardContent
            sx={{
              display: "flex",
              // flexDirection: "column",
              color: "primary",
              justifyContent: "center",
              pt: 10,
              pb: 5
            }}
          >
            <img
              src={url}
              alt={name}
              width="90"
              height="90"
              alignSelf="center"
            />
            <Box alignSelf="center" pl={5}>
              <Box typography="h1" color="#011e4b">
                {name}
              </Box>

              <Box typography="h5" color="#ff9100">
                {desc}
              </Box>
            </Box>
          </CardContent>

          <Container maxWidth="md">
            {roles.map((item) => (
              <>
                <Grid item display="flex" alignItems="center" pl={9} pt={8}>
                  <img
                    src={TrumidArrows}
                    alt="mission"
                    height="24vw"
                    width="auto"
                    alignSelf="center"
                  />

                  <Box pl={2} typography="h4" color="#011e4b">
                    {item.name}s
                  </Box>
                </Grid>

                <Divider sx={{ marginX: 8, mt: 1, mb: 5 }} />
                <Container sx={{ pt: 7 }} maxWidth="sm">
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gridAutoFlow: "row",
                      rowGap:7,
                      columnGap: 10,
                      
                      
                    }}
                  >{item.people.map((item) => (
                    <Grid item component={Box} xs sx={{mb: 10 }} >
                      
                        <Link
                          href={`/profile/${item.id}`}
                          underline="none"
                          fontSize="1rem"
                          fontWeight="600"
                          noWrap="true"
                          sx={{
                            overflow: "visible",
                            textTransform: "capitalize",
                            fontVariant: "subtitle1",
                            
                            // py: 5,
                            // px: 5,
                          }}
                        >
                          <ProfileAvatar profileId={item.id} /> {item.name}
                        </Link>
                      
                    </Grid>
                    ))}
                  </Box>
                </Container>
              </>
            ))}
          </Container>
          {/* 
          <Box
            sx={{
              px: 15,
            }}
          >
            <Stack spacing={3}>
              {roles.map((item) => (
                <div>
                  <Box textAlign="center">
                    <Box display="flex" flexGrow={1} alignItems="center">
                      <Box alignSelf="center"></Box>
                      <Box
                        sx={{
                          typography: "h4",
                          fontWeight: 400,
                          pl: 4,
                          pt: 7,
                          color: "#011e4b",
                        }}
                      >
                        {item.name}s
                      </Box>
                    </Box>
                  </Box>
                  <Grid
                    item
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
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
                  <Divider sx={{ ml: 1, mr: 1 }} />
                  <Container sx={{ display: "flex", pt: 2 }}>
                    <Stack
                      direction="row"
                      spacing={4}
                      py={3}
                      px={3}
                      flexWrap="wrap"
                    >
                      {item.people.map((item) => (
                        <Link
                          href={`/profile/${item.id}`}
                          underline="none"
                          fontSize="1rem"
                          fontWeight="600"
                          noWrap="true"
                          sx={{
                            overflow: "visible",
                            textTransform: "capitalize",
                            fontVariant: "subtitle1",
                            py: 5,
                            px: 5,
                          }}
                        >
                          <ProfileAvatar profileId={item.id} /> {item.name}
                        </Link>
                      ))}
                    </Stack>
                  </Container>
                </div>
              ))}
            </Stack>
          </Box> */}
        </Paper>
      </Container>
      {/* <Paper>
        {roles.map((item) => (
          <>
            <Grid item display="flex" alignItems="center">
              <img
                src={TrumidArrows}
                alt="mission"
                height="30vw"
                width="auto"
                alignSelf="center"
              />

              <Box pl={2} typography="h3" color="#011e4b">
                {item.name}s
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
                {item.people.map((item) => (
                  <Grid item component={Box} xs sx={{ mb: 6 }}>
                    <Link
                      href={`/profile/${item.id}`}
                      underline="none"
                      fontSize="1rem"
                      fontWeight="600"
                      noWrap="true"
                      sx={{
                        overflow: "visible",
                        textTransform: "capitalize",
                        fontVariant: "subtitle1",
                        py: 5,
                        px: 5,
                      }}
                    >
                      <ProfileAvatar profileId={item.id} /> {item.name}
                    </Link>
                  </Grid>
                ))}
              </Box>
            </Container>
          </>
        ))}
      </Paper> */}
    </Box>
  );
}
