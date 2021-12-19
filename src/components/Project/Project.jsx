import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { Card, CardContent, Divider, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProjectInfo } from "../../model/project";
import { ProfileAvatar } from "../Profile/ProfileAvatar";
import TrumidArrows from "../../trumidarrowscircle.svg";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import { MyHeader, MyTitle } from "../../Wrappers";
import Trumid from "../../trumid.svg";
import { flexbox } from "@mui/system";
export function Project() {
  const { projectId } = useParams();
  const projectInfo = useRecoilValue(getProjectInfo(projectId));

  if (!projectInfo) {
    return <div>Project not found</div>;
  }

  console.log(projectInfo);

  const { name, desc, roles = [] } = projectInfo;

  return (
    <Box sx={{ backgroundColor: "#001e4b" }}>
      <Container>
        <Paper square={true}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "#011e4b",
              backgroundColor: "#001e4b",
            }}
          >
            <Box alignSelf="center">
              <Box typography="h2" fontWeight={500} color="#fff">
                {name}
              </Box>

              <Box display="flex" alignItems="center">
                <Box typography="h5" color="#fff">
                  {desc}
                </Box>
              </Box>
            </Box>
          </CardContent>


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
                      <Box alignSelf="center">
                      </Box>
                      <Box
                        sx={{

                          typography: "h6",
                          fontWeight: 400,
                          pl: 2,
                          pt: 4,
                          color: "#011e4b",
                        }}
                      >
                        {item.name}s
                      </Box>
                    </Box>
                  </Box>
                  <Divider sx={{ ml: 1, mr: 1 }} />
                  <Stack
                    direction="row"
                    spacing={4}
                    py={5}
                    px={5}
                    flexWrap="wrap"
                  >
                    {item.people.map((item) => (
                      <Link
                        href={`/profile/${item.id}`}
                        underline="none"
                        // color="#00a0ff"
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
                </div>
              ))}
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
