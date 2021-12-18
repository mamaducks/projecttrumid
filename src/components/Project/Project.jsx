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
import { MyHeader, MyTitle } from "../../Wrappers";
import Trumid from "../../trumid.svg";
import { flexbox } from "@mui/system";
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
          {/* <MyHeader label={name} sub={desc} /> */}

          <Box display="flex" justifyContent="center" alignItems="center" >
            <Box alignSelf="auto" pr={8}>
              <img src={Trumid} alt="trumid" height={55} width={55} />
            </Box>
            <Box display="flex" flexDirection="column" >
              <Box typography="h3"  >
                {name}
              </Box>
              
                <Box  typography="h6" pl={0.5}>{desc}</Box>
              </Box>
            
          </Box>
          <br />
          <br />
          {/* <MyTitle title="Mission Team" /> */}
          <Box textAlign="center" pb={3} fontSize="1.5rem" lineHeight={1}>
            Mission Team
            <Divider sx={{ ml: 12, mr: 12, mt: 2 }} />
          </Box>

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
                      fontWeight: 700,
                      pt: 4,
                      pl: 1,
                      pb: 3,
                      fontSize: "1rem",
                      textTransform: 'capitalize'
                    }}
                  >
                    {item.name}s{/* <Divider sx={{ mr: 12 }} light={true} /> */}
                  </Box>

                  <Stack direction="row" spacing={4} py={5} px={6}>
                    {item.people.map((item) => (
                      <Link
                        href={`/profile/${item.id}`}
                        underline="hover"
                        color="#000"
                        fontSize="1rem"
                       wrap="noWrap"
                      sx={{ textTransform: "capitalize"}}

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
