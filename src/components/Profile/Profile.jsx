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

function HeaderLabel({ label, content, avatar }) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}>
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
          {label}
        </Box>

        <Badge badgeContent={content} color="secondary" overlap="circular">
          {avatar}
        </Badge>
      </Box>
      <Divider sx={{ marginX: 16, marginTop: 1 }} />
    </>
  );
}

export function GridContent({ mediaContent, label }) {
  return (
    <Stack spacing={2} sx={{ justifyContent: "space-evenly" }}>
      <CardContent
        sx={{
          height: 175,
          width: 200,
          mx: 1,
          my: 1,
          px: 1,
          py: 1,
          paddingBottom: 1,
        }}
      >
        <div>{mediaContent}</div>
        <CardContent>
          <Box sx={{ maxWidth: 340 }}>{label}</Box>
        </CardContent>
      </CardContent>
    </Stack>
  );
}

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
            sx={{ display: "flex", justifyContent: "center", py: 10 }}
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
            <HeaderLabel
              label="Badges"
              content={profileInfo.projects.length}
              avatar={
                <Avatar
                  src={Trumid}
                  alt="badge"
                  sx={{ width: 34, height: 34, pb: 1 }}
                />
              }
            />
          </Box>

          <Container sx={{ display: "flex", pt: 7 }}>
            <Grid style={theme.custom.profile.grids} container>
              {badgesWithSrc.map((item) => (
                <Stack sx={{ justifyContent: "space-around" }}>
                  <CardContent
                    sx={{
                      height: 155,
                      width: 200,
                      mx: 1,
                      my: 1,
                      px: 1,
                      py: 1,
                      paddingBottom: 1,
                    }}
                  >
                    <div>
                      <Box
                        typography="h5"
                        textAlign="center"
                        pb={3}
                        color="#001e4b"
                        fontWeight="600"
                      >
                        {item.name}
                      </Box>
                      <Tooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        title={
                          <Box sx={{ maxWidth: 340 }}>
                            <Box typography="body2" sx={{ wrap: false }}>
                              {item.title}
                            </Box>
                            <Box typography="caption">{item.desc}</Box>
                          </Box>
                        }
                      >
                        <CardMedia
                          sx={{ objectFit: "unset" }}
                          component="img"
                          height={100}
                          width={100}
                          image={item.url}
                          alt={item.title}
                        />
                      </Tooltip>
                    </div>
                    <CardContent>
                      <Box sx={{ maxWidth: 340 }}>
                        {/* <Box typography="h4" textAlign="center">
                          {item.name}
                        </Box> */}
                      </Box>
                    </CardContent>
                  </CardContent>
                </Stack>
              ))}
            </Grid>
          </Container>

          <HeaderLabel
            label="Missions"
            content={profileInfo.projects.length}
            avatar={
              <Avatar
                src={TrumidPatch}
                alt="patch"
                sx={{ width: 45, height: 45 }}
              />
            }
          />

          <Container sx={{ display: "flex", pt: 7 }}>
            <Grid container style={theme.custom.profile.grids}>
              {projectsWithSrc.map((item) => (
                <Stack spacing={2} sx={{ justifyContent: "space-evenly" }}>
                  <Card sx={{ boxShadow: 3, width: 230 }}>
                    <CardContent
                      sx={{
                        height: 175,
                        width: 200,
                        mx: 1,
                        my: 1,
                        px: 1,
                        py: 1,
                        paddingBottom: 1,
                      }}
                    >
                      <div>
                        <Box
                          typography="h4"
                          textAlign="center"
                          pb={5}
                          sx={{ fontWeight: 500 }}
                        >
                          {item.name}
                        </Box>
                        <Tooltip
                          TransitionComponent={Fade}
                          TransitionProps={{ timeout: 600 }}
                          title={
                            <Box sx={{ maxWidth: 340 }}>
                              <Box typography="h6" sx={{ wrap: false }}>
                                {item.desc}
                              </Box>
                            </Box>
                          }
                        >
                        <Link href={`/project/${item.id}`}>
                          <CardMedia
                            sx={{ objectFit: "unset" }}
                            component="img"
                            height={130}
                            width={130}
                            image={item.url}
                            alt={item.title}
                          />
                          </Link>
                        </Tooltip>
                      </div>
                      <CardContent>
                        <Box sx={{ maxWidth: 340 }}>
                          <Box typography="h6" sx={{ wrap: false }}>
                            {item.desc}
                          </Box>

                        </Box>
                      </CardContent>
                    </CardContent>
                  </Card>
                </Stack>
              ))}
            </Grid>
          </Container>
        </Paper>
      </Container>
    </Box>
  );
}
