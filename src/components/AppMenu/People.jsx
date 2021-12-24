import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { CardContent, Divider, Paper } from "@mui/material";
import TrumidArrow from "../../bluearrowright.svg";

import { getAllProfileInfos } from "../../model/profile";
import Card from "@mui/material/Card";

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
              Team Members
            </Box>
            <Divider sx={{ marginX: 16, mt: 1, mb: 5 }} />

            {people.map((item) => (
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
            ))}
          </Paper>
        </Container>
      </Box>
    </div>
  );
}
