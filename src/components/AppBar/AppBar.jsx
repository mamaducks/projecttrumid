import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Link, Menu, Toolbar } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import TrumidLogo from "../../utilities/trumidSiteLogo.svg";
import { MenuItemComponent } from "./MenuItem";

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

          <div>
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
                // sx={{ mr: 2 }}
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
              // sx={{ maxWidth: 250 }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItemComponent label="Trumid Missions" link={"/projects"} />
              {/* <Divider py={3} /> */}
              <MenuItemComponent label="Trumid Team" link={"/profiles"} />
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
