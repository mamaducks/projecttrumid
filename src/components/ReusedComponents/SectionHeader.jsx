import { Badge, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TrumidArrows from "../../orangearrowright.svg";

export function SectionHeader({ badgeContent, children, icon }) {
  return (
    <>
      <Grid item display="flex" alignItems="center" pl={3} pt={10} pb={2}>
        <img
          src={TrumidArrows}
          alt="mission"
          height="24vw"
          width="auto"
          alignSelf="center"
        />

        <Box pl={2} pr={2} typography="h3" color="#011e4b">
          {children}
        </Box>

        {badgeContent && (
          <Badge
            badgeContent={badgeContent}
            color="secondary"
            overlap="circular"
          >
            <Avatar
              src={icon}
              alt="badge"
              sx={{
                pb: 1,
                height: "2vw",
                minHeight: "33px",
                width: "auto",
              }}
            />
          </Badge>
        )}
      </Grid>

      <Divider variant="middle" />
    </>
  );
}
