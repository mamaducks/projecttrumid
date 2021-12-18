import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import {
  Card,
  CardContent,
  Divider,
  Paper,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProjectInfo } from "../../model/project";
import { ProfileAvatar } from "../Profile/ProfileAvatar";

export function Project() {
  const { projectId } = useParams();
  const projectInfo = useRecoilValue(getProjectInfo(projectId));

  if (!projectInfo) {
    return <div>Project not found</div>;
  }

  // console.log(JSON.stringify(projectInfo, null, 1));
  console.log(projectInfo);

  const { name, desc, roles = [] } = projectInfo;

  return (
    <Box sx={{ backgroundColor: "#001e4b" }}>
      <Container>
        <Paper square={true}>
          {/* <Card> */}
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ alignSelf: "center" }}>
                <Box sx={{ typography: "h3",  }}>{name}</Box>

                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      typography: "body1",
                      flexGrow: 1,
                    }}
                  >
                    {desc}
                  </Box>
                </Box>
                
              </Box>
              

              {/* <Box
                sx={{
                  px: 15,
                }}
              >
                {roles.map((item) => (
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        typography: "h6",
                        pt: 2,
                      }}
                    >
                      {item.name}

                      <Divider />
                    </Box>

                    <Stack direction="row" spacing={2} pl={2} px={4}>
                      {item.people.map((item) => (
                        <Link
                          href={`/profile/${item.id}`}
                          underline="hover"
                          color="#000"
                          sx={{ spacing: 2, py: 1, px: 5 }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </Stack>
                  </Stack>
                ))}
              </Box> */}
            </CardContent>
          {/* </Card> */}
<Box textAlign="center"><br/>
              Team Members</Box>
          <Box
            sx={{
              px: 15,
            }}
          >
            <Stack spacing={3}>
              {roles.map((item) => (
                <div>
                  <Box
                    sx={{
                      typography: "h6",
                      pt: 4,
                    }}
                  >
                    {item.name}s

                    <Divider />
                  </Box>

                  <Stack direction="row" spacing={4} pt={4} px={4}>
                    {item.people.map((item) => (
                      <Link
                        href={`/profile/${item.id}`}
                        underline="hover"
                        color="#000"
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
