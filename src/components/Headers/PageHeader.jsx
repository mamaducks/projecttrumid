import { CardContent, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Trumid from "../../utilities/patchtrumid.svg";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  headerBox: {
    margin: theme.spacing(4),
  },
  mainHeader: {
    margin: theme.spacing(2),
    height: "4vw",
    width: "auto",
    alignSelf: "center",
  },
  customHeader: {
    margin: theme.spacing(2),
    height: "4vw",
    width: "auto",
    alignSelf: "center",
  },

  headerTextBox: {
    color: "primary",
    verticalAlign: "middle",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export function PageHeader(props) {
  const classes = useStyles();

  const { header, subheader, image, imageTitle, isTrumid } = props;
  return (
    <Grid item className={classes.headerBox}>
      <Box alignItems="center">
        <CardContent
          sx={{
            display: "flex",
            color: "primary",
            justifyContent: "center",
          }}
        >
          <Box alignSelf="center" display="flex" pr={3}>
            {!!isTrumid ? (
              <img src={Trumid} alt="trumid" className={classes.mainHeader} />
            ) : (
              <img
                src={image}
                alt={imageTitle}
                className={classes.customHeader}
              />
            )}
          </Box>

          <Box className={classes.headerTextBox}>
            <Typography variant="h1" color="primary" lineHeight="1"
            >
              {header}
            </Typography>

            <Typography
              variant="h3"
              gutterBottom
              color="secondary"
              // textAlign="right"
              align="justify"
            >
              {subheader}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Grid>
  );
}
