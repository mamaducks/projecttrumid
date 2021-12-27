import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import TrumidArrow from "../../bluearrowright.svg";
import Trumid from "../../trumid.svg";

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
            <Link href={"/"} underline="none">
              {" "}
              <img src={Trumid} alt="badge" height={48} width={48} />
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
                size="large"
                edge="start"
                color="#fff"
                aria-label="menu"
                sx={{ mr: 2 }}
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
              sx={{ maxWidth: 250 }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <ListItemIcon>
                  <img
                    src={TrumidArrow}
                    alt="bluearrow"
                    width="22"
                    height="22"
                  />
                </ListItemIcon>
                <ListItemText>
                  <Link href="/projects" underline="none">
                    Missions
                  </Link>
                </ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <img
                    src={TrumidArrow}
                    alt="bluearrow"
                    width="22"
                    height="22"
                  />
                </ListItemIcon>
                <Link href="/people" underline="none">
                  Trumid Team
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
