import * as React from "react";
import { useState } from "react";
import { AppBar, Box, IconButton, Link, Menu, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItemComponent } from "./MenuItem";
import TrumidLogo from "../../utilities/trumidSiteLogo.svg";


export default function TrumidAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, pt: 0, mt: 0 }}>

      <AppBar position="static">

        <Toolbar>

          <Box flexGrow={1}>

            <Link href={"/"}>
              {" "}
              <img src={TrumidLogo} alt="badge" width="150vh" height="100%" />
            </Link>

          </Box>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon
                aria-label="menu"
              />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >

              <MenuItemComponent label="Trumid Missions" link={"/projects"} />

              <MenuItemComponent label="Trumid Team" link={"/profiles"} />
              
            </Menu>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
