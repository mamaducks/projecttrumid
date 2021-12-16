import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import logo from "./logo.svg";
import Container from "@mui/material/Container";
// import ProfileData from "./ProfileData";
import { Paper } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { profileInfo } from "../../model/profile";

export function Profile() {
  const { profileId } = useParams();
  const userInfo = useRecoilValue(profileInfo(profileId));

  if (!userInfo) {
    return <div>User Profile not found</div>;
  }

  const { name, title, badges = [], projects = [] } = userInfo;

  return (
    <Container>
      <Paper>
        ID = {JSON.stringify(userInfo, null, 3)}
        <Card>
          {/* <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={logo}
            alt="Employee Image"
          /> */}

          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ typography: "h5" }}>{name}</Box>

            <Box
              sx={{
                typography: "subtitle1",
                textAlign: "center",
              }}
            >
              {title}
            </Box>

            <div>Badges</div>

            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
              }}
            >
              {badges.map((item) => (
                <Box title={item.title}>
                  <AdminPanelSettingsIcon fontSize="large" />

                  <Box sx={{ typography: "subtitle3" }}>{item.name}</Box>

                  <Box sx={{ typography: "subtitle1" }}>{item.desc}</Box>
                </Box>
              ))}
            </Box>

            <br />
            <div>Missions</div>

            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
              }}
            >
              {projects.map((item) => (
                <Box title={item.title}>
                  <Box sx={{ typography: "subtitle3" }}>{item.name}</Box>

                  <Box sx={{ typography: "subtitle1" }}>{item.desc}</Box>

                  <div>----</div>

                  {item.roles.map((role) => (
                    <Box sx={{ typography: "subtitle3" }}>{role.name}</Box>
                  ))}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
        {/* <ProfileData /> */}
      </Paper>
    </Container>
  );
}
