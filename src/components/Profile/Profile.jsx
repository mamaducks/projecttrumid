import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import logo from "./logo.svg";
import Container from "@mui/material/Container";
// import ProfileData from "./ProfileData";
import { CardHeader, Paper } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { profileInfo } from "../../model/profile";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShieldIcon from "@mui/icons-material/Shield";
import Badge from "@mui/material/Badge";
import { Icon } from "@mui/material";
import BadgeImprove from "../../img/badgeupward.svg";
import { BadgeCard } from "../../img/BadgeCard";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import Divider from "@mui/material/Divider";

import BadgeAllWays from "../../img/badgearrowslg.png";
import BadgeFixer from "../../img/badgegear.svg";
import BadgeImprover from "../../img/badgeup.png";
import BadgeFast from "../../img/badgefastlg.png";
import BadgeStar from "../../img/badgesuccess.svg";

export function Profile() {
  const { profileId } = useParams();
  const userInfo = useRecoilValue(profileInfo(profileId));

  if (!userInfo) {
    return <div>User Profile not found</div>;
  }

  const { name, title,  badges = [], projects = [] } = userInfo;

  return (
    <Box sx={{ backgroundColor: "#001e4b" }}>
      <Container>
        <Paper square={true}>
          ID = {JSON.stringify(userInfo, null, 3)}
          <div>
            <Card>
              {/* <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={logo}
            alt="Employee Image"
          /> */}

              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ alignSelf: "center" }}>
                  <Box sx={{ typography: "h3" }}>{name}</Box>
                  <Box display="flex" alignItems="center">
                    <Box
                      sx={{
                        typography: "body1",
                        // textAlign: "flex-end",
                        flexGrow: 1,
                      }}
                    >
                      {title}
                    </Box>
                    <Box my={1} typography="subtitle1" alignSelf="center">
                      Badges
                      <Badge badgeContent={2} color="secondary">
                        <ShieldIcon color="primary" alignSelf="center"/>
                      </Badge>
                    </Box>
                  </Box>
                </Box>

                {/* <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
              }}
            >
              {badges.map((item) => (
                <Box title={item.title}>
                  <ShieldIcon fontSize="large" />
                  <Icon>
                    <img
                      src={BadgeImprove}
                      alt="shield"
                      height={25}
                      width={25}
                    />{" "}
                  </Icon>
                  <Box sx={{ typography: "subtitle3" }}>{item.name}</Box>

                  <Box sx={{ typography: "subtitle1" }}>{item.desc}</Box>
                </Box>
              ))}
            </Box> */}
                {/* <br />
                <br />
                <br /> */}

                {/* <Box
                  sx={{ width: "100%", textAlign: "center", typography: "h5" }}
                >
                  Badges
                </Box>
                <br />
                <Divider />

                <Box display="flex">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      px: 4,
                      pt: 5,
                    }}
                    title="mouse over"
                  >
                    <Box sx={{ pb: 4 }}>Improved</Box>
                    <img
                      src={BadgeImprove}
                      alt="shield"
                      height={70}
                      width={70}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      px: 4,
                      pt: 5,
                    }}
                    title="mouse over"
                  >
                    <Box sx={{ pb: 4 }}> Helpful</Box>
                    <img
                      src={BadgeAllWays}
                      alt="shield"
                      height={70}
                      width={70}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      px: 4,
                      pt: 5,
                    }}
                    title="mouse over"
                  >
                    <Box sx={{ pb: 4 }}>Fixer</Box>

                    <img src={BadgeFixer} alt="shield" height={70} width={70} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      px: 4,
                      pt: 5,
                    }}
                    title="mouse over"
                  >
                    <Box sx={{ pb: 4 }}>Improvepng</Box>

                    <img
                      src={BadgeImprover}
                      alt="shield"
                      height={70}
                      width={70}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      px: 4,
                      pt: 5,
                    }}
                    title="mouse over"
                  >
                    <Box sx={{ pb: 4 }}>Fast</Box>

                    <img src={BadgeFast} alt="shield" height={70} width={70} />
                  </Box> */}
                
                

                {/* </Box> 

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
            </Box> */}
              </CardContent>
            </Card>
          </div>
          <BadgeCard />
          <Card sx={{ flexDirection: "column", pb: 10 }}>
            <Box textAlign="center" pb={3} typography="h5">
              Missions
              <Divider sx={{ml: 12, mr: 12}}/>
              <br/>
            </Box>
            {projects.map((item) => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="secondary"/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <GroupWorkIcon sx={{ px: 4, alignSelf: "center", color: "#001e4b" }} />

                  <Box
                    sx={{ typography: "subtitle1", alignItems: "center" }}
                    alignItems="center"
                  >
                    {item.name}
                  </Box>
                </AccordionSummary>
                {item.roles.map((role) => (
                  <AccordionDetails>
                    <Box display="flex">
                      <Typography
                        sx={{
                          mb: 5,
                          px: 10,
                          fontWeight: 600,
                          width: "33%",
                          flexShrink: 0,
                        }}
                        variant="body1"
                      >
                        {role.name}
                      </Typography>
                      <Typography variant="subtitle1" textAlign="right">
                        {item.desc}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                ))}
              </Accordion>
            ))}
          </Card>
          {/* <ProfileData /> */}
        </Paper>
      </Container>
    </Box>
  );
}
