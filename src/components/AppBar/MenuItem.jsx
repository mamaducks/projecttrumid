import { Link, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { useState } from "react";
import TrumidArrowBlue from "../../utilities/bluearrowright.svg";
import TrumidArrow from "../../utilities/orangearrowright.svg";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "primary",
    "&:hover": {
      color: "#ff9100",
    },
  },
}));

export function MenuItemComponent({ link, label }) {
  const [menuImage, setMenuImage] = useState(TrumidArrowBlue);
  const classes = useStyles();

  return (
    <MenuItem
      onMouseEnter={() => setMenuImage(TrumidArrow)}
      onMouseLeave={() => setMenuImage(TrumidArrowBlue)}
    >
      <ListItemIcon>
        <img src={menuImage} alt="bluearrow" width="22" height="22" />
      </ListItemIcon>
      <ListItemText>
        <Link href={link} variant="h4" className={classes.link}>
          {label}
        </Link>
      </ListItemText>
    </MenuItem>
  );
}
