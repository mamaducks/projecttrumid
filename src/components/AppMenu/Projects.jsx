import { getProjectInfo } from "../../model/project";
import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { CardContent, Divider, Paper } from "@mui/material";
import TrumidArrow from "../../bluearrowright.svg";
import TrumidArrows from "../../trumidarrows.svg";

import { getAllProjectInfos } from "../../model/project";

export function Projects() {
  const projects = useRecoilValue(getAllProjectInfos);
  console.log(projects);

  return (
    <div>
      Projects
      <Box sx={{ backgroundColor: "#001e4b" }}>
        <Container>
          {projects.map((item) => (
            <Paper square={true}>
              <CardContent
                sx={{
                  display: "flex",
                  // flexDirection: "column",
                  color: "primary",
                  justifyContent: "center",
                  pt: 5,
                }}
              >
                <img
                  src={TrumidArrow}
                  alt="mission"
                  width="90"
                  height="90"
                  alignSelf="center"
                />

                <Box alignSelf="center" pl={5}>
                  <Box typography="h1" color="#011e4b">
                    project name
                    {item.name}
                  </Box>

                  <Box typography="h5" color="#ff9100">
                    project desc
                    {item.desc}
                  </Box>
                </Box>
              </CardContent>
              <Box textAlign="center" pb={3} fontSize="1.5rem" lineHeight={1}>
                Current Missions
                <Divider sx={{ ml: 12, mr: 12, mt: 2 }} />
              </Box>
              <Stack direction="row" spacing={10} justifyContent="center">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  px={8}
                >
                  <Box alignSelf="auto" pr={4}>
                    <img
                      src={TrumidArrows}
                      alt="trumid"
                      height={50}
                      width={50}
                    />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Box typography="h5">{item.name}</Box>
                    <Box typography="body2" pl={0.5}>
                      {item.desc}
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Container>
      </Box>
    </div>
  );
}
