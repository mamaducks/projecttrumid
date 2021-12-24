import {
  Box,
  CardActionArea,
  CardContent,
  Container,
  Fade,
  Typography,
  Grid,
  Badge,
  Paper,
  Divider,
  Tooltip,
  Card,
  CardMedia,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProfileInfo } from "../../model/profile";
import { useMemo } from "react";
import Link from "@mui/material/Link";
import Trumid from "../../trumidavatarbadge.svg";
import TrumidMission from "../../trumid.svg";
import TrumidPatch from "../../patchtrumid.svg";
import Avatar from "@mui/material/Avatar";

import { useTheme } from "@mui/material/styles";
import { CenterFocusStrong } from "@mui/icons-material";

export function Profile() {
  const theme = useTheme();
  const { profileId } = useParams();
  const profileInfo = useRecoilValue(getProfileInfo(profileId));

  const badgesWithSrc = useMemo(
    () =>
      profileInfo?.badges.map((item) => {
        const blob = new Blob([item.src], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);

        return { ...item, url };
      }),
    [profileInfo?.badges]
  );

  const projectsWithSrc = useMemo(
    () =>
      profileInfo?.projects.map((item) => {
        const blob = new Blob([item.src], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);

        return { ...item, url };
      }),
    [profileInfo?.projects]
  );

  if (!profileInfo) {
    return <div>User Profile not found</div>;
  }

  console.log(profileInfo);

  const { name, title, badges = [], projects = [] } = profileInfo;

  return (
    <Box sx={{ backgroundColor: "#001e4b" }}>
      <Container>
        <Paper square={true} sx={{ pb: 10 }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "center", py: 4 }}
          >
            <div>
              <Box typography="h1" letterSpacing={1} color="#011e4b">
                {name}
              </Box>
              <Box display="flex">
                <Box style={theme.custom.profile.subHeader}>{title}</Box>
              </Box>
            </div>
          </CardContent>
          <Box>
            <Box
              sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
            >
              <Box
                typography="h3"
                sx={{
                  alignSelf: "flex-end",
                  paddingRight: 2,
                  letterSpacing: 0.5,
                  color: "#011e4b",
                  fontWeight: 500,
                }}
              >
                Badges
              </Box>

              <Badge
                badgeContent={profileInfo.projects.length}
                color="secondary"
                overlap="circular"
              >
                <Avatar
                  src={Trumid}
                  alt="badge"
                  sx={{ width: "auto", height: "auto", maxWidth: 45, pb: 1 }}
                />
              </Badge>
            </Box>
            <Divider sx={{ marginX: 16, marginTop: 1 }} />
          </Box>

          <Container sx={{ pt: 7 }}>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="stretch"
              spacing={0}
              sx={{ flexWrap: "wrap" }}
            >
              {" "}
              {badgesWithSrc.map((item) => (
                <Card sx={{ boxShadow: 3, maxWidth: 300 }}>
                  <CardContent
                    sx={{
                      height: "auto",
                      width: "auto",
                      mx: 1,
                      my: 1,
                      px: 1,
                      py: 1,
                      paddingBottom: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CardMedia
                      sx={{
                        maxWidth: 97,
                        minWidth: 95,
                        justifyContent: "center",
                        pr: 3,
                      }}
                      component="img"
                      height="auto"
                      width="auto"
                      image={item.url}
                      alt={item.title}
                    />

                    <div>
                      <Box
                        typography="h4"
                        textAlign="center"
                        sx={{ fontWeight: 500 }}
                      >
                        {item.name}
                      </Box>
                      <Box typography="h6" sx={{ wrap: false }}>
                        {item.title}
                      </Box>
                    </div>
                    {/* </Box> */}
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Container>

          <Box
            sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
          >
            <Box
              typography="h3"
              sx={{
                alignSelf: "flex-end",
                paddingRight: 2,
                letterSpacing: 0.5,
                color: "#011e4b",
                fontWeight: 500,
              }}
            >
              Missions
            </Box>

            <Badge
              badgeContent={profileInfo.projects.length}
              color="secondary"
              overlap="circular"
            >
              <Avatar
                src={TrumidPatch}
                alt="patch"
                sx={{ width: "auto", height: "auto", maxWidth: 45, pb: 1 }}
              />
            </Badge>
          </Box>
          <Divider sx={{ marginX: 16, marginTop: 1 }} />

          <Container sx={{ pt: 7 }}>
            {/* style={theme.custom.profile.grids} */}
            {/* <Grid
              container
              sx={{
                justifyContent: "space-around",
                paddingY: 2,
                paddingX: 5,
                boxSizing: "border-box",
              }}
            > */}

            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="stretch"
              spacing={0}
              sx={{ flexWrap: "wrap" }}
            >
              {" "}
              {projectsWithSrc.map((item) => (
                <Card sx={{ boxShadow: 3, maxWidth: 300 }}>
                  <CardContent
                    sx={{
                      height: "auto",
                      width: "auto",
                      mx: 1,
                      my: 1,
                      px: 1,
                      py: 1,
                      paddingBottom: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {/* <Box
                        typography="h4"
                        textAlign="center"
                        pb={5}
                        sx={{ fontWeight: 500 }}
                      >
                        {item.name}
                      </Box> */}
                    {/* <Tooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title={
                          <Box sx={{ width: "auto" }}>
                            <Box typography="h6" sx={{ wrap: false }}>
                              {item.desc}
                            </Box>
                          </Box>
                        }
                      > */}
                    <Link href={`/project/${item.id}`}>
                      <CardMedia
                        sx={{
                          maxWidth: 97,
                          minWidth: 95,
                          justifyContent: "center",
                          alignItems: "center",
                          pr: 3,
                        }}
                        component="img"
                        height="auto"
                        width="auto"
                        image={item.url}
                        alt={item.title}
                      />
                    </Link>
                    <div>
                      <Box
                        typography="h4"
                        textAlign="center"
                        sx={{ fontWeight: 500 }}
                      >
                        <Link href={`/project/${item.id}`} underline="none">
                          {item.name}
                        </Link>
                      </Box>

                      <Box
                        typography="h6"
                        textAlign="center"
                        sx={{ wrap: false }}
                      >
                        {item.desc}
                      </Box>
                    </div>
                    {/* </Box> */}
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Container>
        </Paper>
      </Container>
    </Box>
  );
}
