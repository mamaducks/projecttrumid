import { Badge, Divider, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import TrumidArrows from "../../utilities/orangearrowright.svg";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sectionHeader: {
    display: "flex",
    alignItems: "center",

    paddingTop: theme.spacing(4),
    margin: theme.spacing(2),
  },
  arrowsImage: {
    height: "1.5vw",
    width: "auto",
    alignSelf: "center",
  },
  avatar: {
    // margin: theme.spacing(1),
  },
  divider: {
    // margin: theme.spacing(1),
    marginBottom: theme.spacing(5),
  },
}));

export function SectionHeader({ badgeContent, icon, label }) {
  const classes = useStyles();
  return (
    <>
      <Grid item className={classes.sectionHeader}>
        <img src={TrumidArrows} alt="mission" className={classes.arrowsImage} />
        <Typography variant="h3" px={1} color="primary">
          
          {label}
          

        
        </Typography>

        {badgeContent && (
          <Badge badgeContent={badgeContent}>
            <Avatar src={icon} alt="badge" className={classes.avatar} />
          </Badge>
        )}
      </Grid>

      <Divider className={classes.divider} />
    </>
  );
}
