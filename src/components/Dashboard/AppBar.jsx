import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Trumid from "../../trumid.svg";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, pt: 0, mt:0 }}>
      <AppBar position="static">
        <Toolbar>
            <Box flexGrow= {1}><img
                      src={Trumid}
                      alt="badge"
                      height={48}
                      width={48}
                    /></Box>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
