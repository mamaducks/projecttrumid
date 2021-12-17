import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getProfileInfo } from "../../model/profile";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShieldIcon from "@mui/icons-material/Shield";
import Badge from "@mui/material/Badge";
import { BadgeCard } from "../../img/BadgeCard";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import Divider from "@mui/material/Divider";

import { useMemo } from "react";

export function Profile() {
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

  if (!profileInfo) {
    return <div>User Profile not found</div>;
  }

  // console.log(JSON.stringify(profileInfo, null, 1));
  console.log(profileInfo);

  const { name, title, badges = [], projects = [] } = profileInfo;

  return (
    <Box sx={{ backgroundColor: "#001e4b" }}>
      <Container>
        <Paper square={true}>
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
                        <ShieldIcon color="primary" alignSelf="center" />
                      </Badge>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  {badgesWithSrc.map((item) => (
                    <Box title={item.title}>
                      <img src={item.url} alt="shield" height={70} width={70} />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </div>
          <BadgeCard />
          <Card sx={{ flexDirection: "column", pb: 10 }}>
            <Box textAlign="center" pb={3} typography="h5">
              Missions
              <Divider sx={{ ml: 12, mr: 12 }} />
              <br />
            </Box>
            {projects.map((item) => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Link
                    href={`/project/${item.id}`}
                    underline="hover"
                    color="#000"
                  >
                    <GroupWorkIcon
                      sx={{ px: 4, alignSelf: "center", color: "#001e4b" }}
                    />
                  </Link>

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
                        {role.desc}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                ))}
              </Accordion>
            ))}
          </Card>
        </Paper>
      </Container>
    </Box>
  );
}
