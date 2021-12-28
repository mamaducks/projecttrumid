import { Card, CardHeader, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useRecoilValue } from "recoil";
import { getAllProfileInfos } from "../../model/profile";
import TrumidPatch from "../../patchtrumid.svg";
import Trumid from "../../trumidavatarbadge.svg";
import { GridContainer, PeopleCard, GridCard } from "../ReusedComponents/GridCard";
import { PageHeader } from "../ReusedComponents/PageHeader";

export function People() {
  const people = useRecoilValue(getAllProfileInfos);

  return (
    <Box>
      <PageHeader
        image={TrumidPatch}
        imageTitle="Mssion"
        header="Trumid Center"
        subheader="Team Members"
      />

      <GridContainer>
        {people.map((item) => (
          <GridCard
            link={`/profile/${item.id}`}
            title={item.name}
            subheader={item.title}
            projectsCount={item.projects.length}
            badgesCount={item.badges.length}
            isPeople
          />
        ))}

        {/* {people.map((item) => (
          <Grid item component={Card} xs sx={{ mb: 6, pb: 0, m: 3 }}>
            <Link href={`/profile/${item.id}`} underline="none">
              <CardHeader
                titleTypographyProps={{
                  variant: "h4",
                  color: "#fff",
                  ml: 4,
                }}
                title={item.name}
                subheaderTypographyProps={{
                  variant: "subtitle2",
                  color: "#ff9100",
                  noWrap: "true",
                  ml: 4,
                  fontWeight: "bold",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
                subheader={item.title}
                sx={{
                  borderBottom: "3px solid ",
                  borderColor: "#ff9100",
                  background: "linear-gradient( #011e4b, #23467e)",
                  pt: 3,
                  paddingBottom: "2px",
                  margin: "auto",
                  display: "block",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 5,
                  pb: 3,
                  alignItems: "center",
                }}
              >
                <Badge
                  badgeContent={item.projects.length}
                  color="secondary"
                  overlap="circular"
                >
                  <Avatar
                    src={TrumidPatch}
                    alt="badge"
                    sx={{
                      width: "auto",
                      height: "auto",
                      maxWidth: 34,
                      pb: 1,
                    }}
                  />
                </Badge>

                <Box sx={{ pl: 7 }}>
                  <Badge
                    badgeContent={item.badges.length}
                    color="secondary"
                    overlap="circular"
                  >
                    <Avatar
                      src={Trumid}
                      alt="badge"
                      sx={{
                        width: "auto",
                        height: "auto",
                        maxWidth: 34,
                        pb: 1,
                      }}
                    />
                  </Badge>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))} */}
      </GridContainer>
    </Box>
  );
}
