import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import {
  CardHeader,
  CardMedia,
  Fade,
  Icon,
  Paper,
  Popover,
  Stack,
  Tooltip,
  List,
  ListItem
} from "@mui/material";
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
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import Divider from "@mui/material/Divider";
import { useMemo } from "react";
import { MyHeader, MyTitle } from "../../Wrappers";
import { textAlign } from "@mui/system";
import TrumidArrows from "../../trumidarrows.svg";
import Trans from "../../trans.svg";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';

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

  console.log(profileInfo);

  const { name, title, badges = [], projects = [] } = profileInfo;

  return (
    <Box sx={{ backgroundColor: "#001e4b" }}>
      <Container>
        <Paper square={true} sx={{pb: 10}}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "#fff",
              backgroundColor: "#011e4b",
            }}
          >
            <Box alignSelf="center">
              <Box typography="h2" fontWeight={500} color="#fff">
                {name}
              </Box>

              <Box display="flex" alignItems="center">
                <Box typography="h5" color="#fff">
                  {title}
                </Box>
              </Box>
              <Box
                mt={5}
                typography="button"
                alignSelf="center"
                textAlign="right"
                color="primary"
              >
                Badges
                <Badge
                  badgeContent={profileInfo.badges.length}
                  color="secondary"
                >
                  <ShieldIcon color="#fff" alignSelf="center" />
                </Badge>
              </Box>
            </Box>
          </CardContent>

          <Box>
            <Box
              textAlign="center"
              color="primary"
              pt={5}
              pb={2}
              typography="h4"
              fontWeight="400"
            >
              Badges
              <Divider sx={{ ml: 12, mr: 12, mt: 2 }} />
            </Box>
              </Box> 

<Container sx={{ py: 7, pl: 7 }} maxWidth="sm">
          <Grid container spacing={5}>
            {badgesWithSrc.map((item) => (
              <Grid item key={item} xs={4} sm={3} md={2}>
                <Box
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
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

          <Box
            textAlign="center"
            pt={5}
            pb={2}
            typography="h4"
            fontWeight="400"
            color="primary"
          >
            Missions
            <Divider sx={{ ml: 12, mr: 12, mb: 5 }} />
          </Box>
          {projects.map((item) => (
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Link
                  href={`/project/${item.id}`}
                  color="#000"
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    pl={2}
                    alignItems="center"
                  >
                    <img
                      src={TrumidArrows}
                      alt="badge"
                      height={28}
                      width={28}
                    />
                  </Box>
                </Link>

                <Box
                  sx={{
                    typography: "h6",
                    fontWeight: 400,
                    pl: 2,
                    color: "#011e4b",
                  }}
                >
                  {item.name}
                </Box>
              </AccordionSummary >
              {item.roles.map((role) => (
                <AccordionDetails>
                  <Box display="flex" mb={2} alignItems="center">
                    <Typography
                      sx={{
                        px: 14,
                        fontWeight: 600,
                        width: "33%",
                        flexShrink: 0,
                        color: "#011e4b",
                      }}
                      variant="subtitle1"
                    >
                      {role.name}
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      textAlign="right"
                      color="#011e4b"
                    >
                      {role.desc}
                    </Typography>
                  </Box>
                </AccordionDetails>
              ))}
            </Accordion>
          ))}
        </Paper>
      </Container>
    </Box>
  );
}
