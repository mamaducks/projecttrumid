import {
  Box,
  CardContent,
  Container,
  Grid,
  Badge,
  Paper,
  Divider,
  Card,
  CardMedia,
  Stack,
  CardHeader,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProfileInfo } from "../../model/profile";
import { useMemo } from "react";
import Link from "@mui/material/Link";
import Trumid from "../../trumidavatarbadge.svg";
import TrumidPatch from "../../patchtrumid.svg";
import Avatar from "@mui/material/Avatar";
import AppBar from "../Dashboard/AppBar";

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
      <AppBar />
      <Paper square={true} sx={{ pb: 10 }}>
        <CardContent sx={{ display: "flex", justifyContent: "center", py: 4 }}>
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
            sx={{ display: "flex", justifyContent: "center", paddingTop: 5 }}
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
                sx={{
                  pb: 1,
                  objectFit: "contain",
                  width: "100%",
                  height: "2vw",
                }}
              />
            </Badge>
          </Box>
          <Divider sx={{ marginX: 16, marginTop: 1 }} />
        </Box>

        <Container sx={{ pt: 7 }}>
          <Box
            sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
            alignItems="stretch"
          >
            {badgesWithSrc.map((item) => (
              //  <Grid item sx={{alignItems: 'stretch'}}>
              <Grid item component={Card} xs sx={{ mb: 6 }}>
                {/* <Card sx={{alignItems: 'stretch'}}> */}
                <CardHeader
                  titleTypographyProps={{
                    variant: "h4",
                    noWrap: "true",
                    color: "#fff",
                    pl: 3,
                  }}
                  title={item.name}
                  subheaderTypographyProps={{
                    variant: "caption",
                    color: "#ff9100",
                    noWrap: "true",
                    pl: 5,
                  }}
                  subheader={item.title}
                  sx={{
                    backgroundColor: "#011e4b",
                    width: "100%",
                    height: "3vw",
                    borderBottom: "3px solid ",
                    borderColor: "#ff9100",
                    pt: 3,
                    pb: 2,
                    pl: 2,
                    display: "block",
                    // objectFit: "cover",
                    marginTop: "30",
                  }}
                />
                <CardMedia
                  sx={{
                    // height: "200px",
                    // height: 140,
                    // objectFit: "unset",
                    // paddingTop: '56.25%',
                    objectFit: "contain",
                    width: "100%",
                    height: "11vw",
                    // objectFit: "cover",
                    marginTop: "10px",
                    marginBottom: "5px",
                    // maxWidth: 97,
                    // minWidth: 95,
                    // maxHeight: 100,
                    justifyContent: "center",
                    // pr: 3,
                  }}
                  component="img"
                  height="auto"
                  // maxHeight="180px"
                  width="auto"
                  image={item.url}
                  alt={item.title}
                />
                {/* </Card> */}
              </Grid>
            ))}
          </Box>
        </Container>

        <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 6 }}>
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
              sx={{ pb: 1, objectFit: "contain", width: "100%", height: "2vw" }}
            />
          </Badge>
        </Box>
        <Divider sx={{ marginX: 16, marginTop: 1 }} />

        <Container sx={{ pt: 7 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridAutoFlow: "row",
            }}
            alignItems="stretch"
          >
            {projectsWithSrc.map((item) => (
              <>
                <Grid item component={Card} xs sx={{ mb: 6 }}>
                  {/* <Card sx={{alignItems: 'stretch'}}> */}
                  <CardHeader
                    titleTypographyProps={{
                      variant: "h4",
                      noWrap: "true",
                      color: "#fff",
                      pl: 3,
                    }}
                    title={item.name}
                    subheaderTypographyProps={{
                      variant: "caption",
                      color: "#ff9100",
                      noWrap: "true",
                      overflow: "hidden",
                      pl: 5,
                      // align: "inherit",
                    }}
                    subheader={item.desc}
                    sx={{
                      backgroundColor: "#011e4b",
                      width: "100%",
                      height: "3vw",
                      borderBottom: "3px solid ",
                      borderColor: "#ff9100",
                      pt: 3,
                      pb: 2,
                      margin: "auto",
                      display: "block",
                      pl: 2,

                      // ml: 1,
                      // boxSizing: "content-box",
                      // objectFit: "cover",
                      marginTop: "30",
                    }}
                  />
                  <CardMedia
                    sx={{
                      objectFit: "contain",
                      width: "100%",
                      height: "11vw",
                      // objectFit: "cover",
                      marginTop: "10px",
                      marginBottom: "5px",

                      justifyContent: "center",
                      // pr: 3,
                    }}
                    component="img"
                    height="auto"
                    width="auto"
                    image={item.url}
                    alt={item.title}
                  />
                </Grid>
              </>
            ))}
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}
