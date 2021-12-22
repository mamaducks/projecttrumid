import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { CardContent, Divider, Paper} from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProjectInfo } from "../../model/project";
import { ProfileAvatar } from "../Profile/ProfileAvatar";
import { useMemo } from "react";

export function Project() {
  const { projectId } = useParams();
  const projectInfo = useRecoilValue(getProjectInfo(projectId));

  const projectInfoWithSrc = useMemo(() => {
    const blob = new Blob([projectInfo.src], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    return { ...projectInfo, url };
  }, [projectInfo.src]);

  if (!projectInfo) {
    return <div>Project not found</div>;
  }

  console.log(projectInfo);

  const { name, desc, url, roles = [] } = projectInfoWithSrc;

  return (
    <Box sx={{ backgroundColor: "#001e4b" }}>
      <Container>
        <Paper square={true} >
          <CardContent
            sx={{
              display: "flex",
              // flexDirection: "column",
              color: "primary",
              justifyContent: "center",
              pt: 5
            }}
          >
            <img src={url} alt="mission" width="90" height="90" alignSelf="center" />
            <Box alignSelf="center" pl={5}>
              
              <Box typography="h1"  color="#011e4b">
                {name}
              </Box>

             
                <Box typography="h5" color= "#ff9100" >
                  {desc}
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
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
