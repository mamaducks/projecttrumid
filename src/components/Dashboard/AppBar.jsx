import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Trumid from "../../trumid.svg";
import { BasicMenu } from "./DashboardMenu";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
// import { Link } from "react-router-dom";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import TrumidArrow from "../../bluearrowright.svg";
import Link from "@mui/material/Link";

export default function ButtonAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

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
            <img src={Trumid} alt="badge" height={48} width={48} />
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
