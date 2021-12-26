import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import TrumidArrow from "../../bluearrowright.svg";
import TrumidArrows from "../../orangearrowright.svg";
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
import CardMedia from "@mui/material/CardMedia";

import { getAllProfileInfos } from "../../model/profile";

import TrumidPatch from "../../patchtrumid.svg";

import Trumid from "../../trumidavatarbadge.svg";

import AppBar from "../Dashboard/AppBar";

export function People() {
  const people = useRecoilValue(getAllProfileInfos);

  return (
    <div>
      <Box sx={{ backgroundColor: "#001e4b" }}>
        <AppBar />
        <Container>
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
            {/* <Box marginLeft={20} pt={7} pl={3} fontSize="2rem" lineHeight={1}>
              <img
                src={TrumidArrow}
                alt="mission"
                width={27}
                height={27}
                alignSelf="center"
              />{" "}
              Team Members
            </Box>
            <Divider sx={{ marginX: 16, mt: 1, mb: 5 }} /> */}

            {/* {people.map((item) => (
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    color: "primary",
                    justifyContent: "center",
                    pY: 8,
                  }}
                >
                  <div>
                    <Box typography="h1" letterSpacing={1} color="#011e4b">
                      <Link href={`/profile/${item.id}`} underline="none">
                        {" "}
                        {item.name}
                      </Link>
                    </Box>
                    <Box display="flex">
                      <Box
                        sx={{
                          flexGrow: 1,
                          fontSize: "h5",
                          alignItems: "center",
                          color: "#ff9100",
                          letterSpacing: 1,
                          paddingLeft: 3,
                        }}
                      >
                        {item.title}
                      </Box>

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
                              src={Trumid}
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
                    </Box>
                  </div>
                </CardContent>
              </Card>
            ))} */}

<Grid item display="flex" alignItems="center" justifyContent="center">
            <img
              src={TrumidArrows}
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
                              src={Trumid}
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
        
          </Paper>
        </Container>
      </Box>
    </div>
  );
}
