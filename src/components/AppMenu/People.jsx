import { getProjectInfo } from "../../model/project";
import { useRecoilValue } from "recoil";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { CardContent, Divider, Paper } from "@mui/material";
import TrumidArrow from "../../bluearrowright.svg";
import TrumidArrows from "../../trumidarrows.svg";
import { useMemo } from "react";
import { getAllProfileInfos } from "../../model/profile";
import { getAllProjectInfos } from "../../model/project";

export function Peeps() {
  const people = useRecoilValue(getAllProfileInfos);

  return (
    <div>
      People
      <Box sx={{ backgroundColor: "#001e4b" }}>
        <Container>
          {people.map((item) => (
            <Paper square={true}>
              <CardContent
                sx={{
                  display: "flex",
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
                    person name
                    {item.name}
                  </Box>

                  <Box typography="h5" color="#ff9100">
                    persondesc
                    {item.desc}
                  </Box>
                </Box>
              </CardContent>
              <Box textAlign="center" pb={3} fontSize="1.5rem" lineHeight={1}>
                Current people
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




export function People() {
    return (
    <div>people</div>
    );
}