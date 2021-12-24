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
            <Box textAlign="center" pb={3} fontSize="1.5rem" lineHeight={1}>
              Team Members
              <Divider sx={{ ml: 12, mr: 12, mt: 2 }} />
            </Box>
            {people.map((item) => (
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    color: "primary",
                    justifyContent: "center",
                    pt: 5,
                  }}
                >
                  <CardContent
                    sx={{ display: "flex", justifyContent: "center", py: 10 }}
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
                            alignContent: "flex-start",
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

                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              paddingTop: 2,
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
                                sx={{ width: 34, height: 34, pb: 1 }}
                              />
                            </Badge>
                            <Badge
                              badgeContent={item.badges.length}
                              color="secondary"
                              overlap="circular"
                            >
                              <Avatar
                                src={Trumid}
                                alt="badge"
                                sx={{ width: 34, height: 34, pb: 1 }}
                              />
                            </Badge>
                          </Box>
                        </Box>
                      </Box>
                    </div>
                  </CardContent>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </Container>
      </Box>
    </div>
  );
}
