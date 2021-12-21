import {
  Box,
  CardContent,
  Container,
  Fade,
  Typography,
  Grid,
  Badge,
  Paper,
  Divider,
  Tooltip,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProfileInfo } from "../../model/profile";
import { useMemo } from "react";
import Trumid from "../../badgetrumid.svg";
import TrumidMission from "../../trumid.svg";

import { useTheme } from "@mui/material/styles";

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
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <CardContent sx={{ justifyContent: "center" }}>
              <Box>
                <Box style={theme.custom.profile.name}>{name}</Box>
                <Box display="flex">
                  <Box style={theme.custom.profile.title}>{title}</Box>
                  <Box style={theme.custom.profile.badges.box}>
                    <Box style={theme.custom.profile.badges.label}>Badges</Box>
                    <Badge
                      badgeContent={profileInfo.badges.length}
                      color="secondary"
                      sx={{ pr: 1 }}
                    >
                      <img
                        src={Trumid}
                        width="30"
                        height="30"
                        alignSelf="center"
                      />
                    </Badge>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Container>

          <CardContent>
            <Typography variant="h1" component="div">
              name
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              title
            </Typography>
            <Box style={theme.custom.profile.badges.box}>
              <Box style={theme.custom.profile.badges.label}>Badges</Box>
              <Badge
                badgeContent={profileInfo.badges.length}
                color="secondary"
                sx={{ pr: 1 }}
              >
                <img src={Trumid} width="30" height="30" alignSelf="center" />
              </Badge>
            </Box>

            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>

          <Box>
            <Box style={theme.custom.profile.header}>
              Badges
              <Divider sx={{ mx: 16, mt: 2, alignSelf: "center" }} />
            </Box>
          </Box>

          <Container sx={{ py: 7, pl: 7 }} maxWidth="sm">
            <Grid container spacing={5} sx={{ justifyContent: "center" }}>
              {badgesWithSrc.map((item) => (
                <Grid item key={item} xs={4} sm={3} md={2}>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Tooltip
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                      title={
                        <Box sx={{ maxWidth: 300 }}>
                          <div>{item.name}</div>
                          <div>{item.title}</div>
                          <div>{item.desc}</div>
                        </Box>
                      }
                    >
                      <img
                        src={item.url}
                        srcSet={item.url}
                        alt={item.title}
                        loading="lazy"
                      />
                    </Tooltip>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>

          <Box style={theme.custom.profile.header}>
            Missions
            <Divider sx={{ mx: 16, mb: 5, mt: 2 }} />
          </Box>

          <Container sx={{ py: 7, pl: 7 }} maxWidth="sm">
            <Grid container spacing={5} sx={{ justifyContent: "center" }}>
              {projectsWithSrc.map((item) => (
                <Grid item key={item} xs={4} sm={3} md={2}>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Tooltip
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                      title={
                        <>
                          {item.roles.map((role) => (
                            <Box sx={{ maxWidth: 300 }}>
                              <div>{role.name}</div>
                              <div> {role.desc}</div>
                            </Box>
                          ))}
                        </>
                      }
                    >
                      <img src={item.url} alt={item.title} loading="lazy" />
                    </Tooltip>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Paper>
      </Container>
    </Box>
  );
}
