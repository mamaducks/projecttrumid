import { getProjectInfo } from "../../model/project";
import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { CardContent, Divider, Paper } from "@mui/material";
import TrumidArrow from "../../bluearrowright.svg";
import TrumidArrows from "../../trumidarrows.svg";
import { useMemo } from "react";
import { getAllProfileInfos } from "../../model/profile";
import Card from "@mui/material/Card";
import Shield from "@mui/icons-material/Shield";
import TrumidShield from "../../badgetrumid.svg";
import TrumidPatch from "../../patchtrumid.svg";

import Trumid from "../../trumidavatarbadge.svg";

export function People() {
  const people = useRecoilValue(getAllProfileInfos);

  return (
    <div>
      <Box sx={{ backgroundColor: "#001e4b" }}>
        <Container>
          <Paper square={true}>
            <Box textAlign="center" pb={3} fontSize="2rem" lineHeight={1}>
              Team Members
            </Box>
            <Divider sx={{ marginX: 16, marginTop: 5 }} />

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
                            // alignContent: "flex-start",
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

                              // sx={{gapRow:70}}
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
