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
import { GridCard, GridContainer } from "../ReusedComponents/GridCard";
import { PageHeader } from "../ReusedComponents/PageHeader";
import { SectionHeader } from "../ReusedComponents/SectionHeader";
import AppBar from "./AppBar";

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

      <PageHeader title="Trumid Center" subheader="Dashboard" />

      <Container>
        <SectionHeader>Recent Missions</SectionHeader>
      </Container>

      <GridContainer>
        {projectsWithSrc.map((item) => (
          <GridCard
            link={`/project/${item.id}`}
            title={item.name}
            subheader={item.desc}
            image={item.url}
            imageTitle={item.title}
            toolTip="click to view"
          />
        ))}
      </GridContainer>

      <Container>
        <SectionHeader>Recent Members</SectionHeader>
      </Container>

      <GridContainer>
        {people.map((item) => (
          <Grid item component={Card} xs sx={{ mb: 6, pb: 0, m: 3 }}>
            <Link href={`/profile/${item.id}`} underline="none">
              <CardHeader
                titleTypographyProps={{
                  variant: "h4",
                  color: "#fff",
                  ml: 4,
                }}
                title={item.name}
                subheaderTypographyProps={{
                  variant: "subtitle2",
                  color: "#ff9100",
                  noWrap: "true",
                  ml: 4,
                  fontWeight: "bold",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
                subheader={item.title}
                sx={{
                  borderBottom: "3px solid ",
                  borderColor: "#ff9100",
                  background: "linear-gradient( #011e4b, #23467e)",
                  pt: 3,
                  pb: 2,
                  margin: "auto",
                  display: "block",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 5,
                  pb: 3,
                  // px: 8,
                  alignItems: "center",
                }}
              >
                <Badge
                  badgeContent={item.projects.length}
                  color="secondary"
                  overlap="circular"
                >
                  <Avatar
                    src={TrumidPatch}
                    alt="badge"
                    sx={{
                      width: "auto",
                      height: "auto",
                      maxWidth: 34,
                      pb: 1,
                    }}
                  />
                </Badge>

                <Box sx={{ pl: 7 }}>
                  <Badge
                    badgeContent={item.badges.length}
                    color="secondary"
                    overlap="circular"
                  >
                    <Avatar
                      src={TrumidAvatar}
                      alt="badge"
                      sx={{
                        width: "auto",
                        height: "auto",
                        maxWidth: 34,
                        pb: 1,
                      }}
                    />
                  </Badge>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </GridContainer>
      {/* <Grid item display="flex" alignItems="center" justifyContent="center">
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
          </Container> */}

      <Grid
        item
        display="flex"
        alignItems="center"
        justifyContent="center"
        pt={12}
      >
        <img
          src={TrumidArrowsOrange}
          alt="mission"
          height="30vw"
          width="auto"
          alignSelf="center"
        />

        <Box pl={2} typography="h3" color="#011e4b">
          Team Members
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
          {people.map((item) => (
            <Grid item component={Card} xs sx={{ mb: 6 }}>
              <Link href={`/profile/${item.id}`} underline="none">
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
                  subheader={item.title}
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 5,
                  }}
                >
                  <Badge
                    badgeContent={item.projects.length}
                    color="secondary"
                    overlap="circular"
                  >
                    <Avatar
                      src={TrumidPatch}
                      alt="badge"
                      sx={{
                        width: "auto",
                        height: "auto",
                        maxWidth: 34,
                        pb: 1,
                      }}
                    />
                  </Badge>
                  <Box sx={{ pl: 2 }}>
                    <Badge
                      badgeContent={item.badges.length}
                      color="secondary"
                      overlap="circular"
                    >
                      <Avatar
                        src={TrumidAvatar}
                        alt="badge"
                        sx={{
                          width: "auto",
                          height: "auto",
                          maxWidth: 34,
                          pb: 1,
                        }}
                      />
                    </Badge>
                  </Box>
                </Box>
                {/* <Tooltip title="click to view">
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
                    </Tooltip> */}
              </Link>
            </Grid>
          ))}
        </Box>
      </Container>
    </div>
  );
}
