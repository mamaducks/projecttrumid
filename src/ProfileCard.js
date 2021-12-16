import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import logo from "./logo.svg";
import Container from "@mui/material/Container";
import ProfileData from "./ProfileData";
import { Paper } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function ProfileCard() {
  return (
    <Container>

      <Paper>

        <Card>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={logo}
            alt="Employee Image"
          />

         

            <CardContent sx={{ display: "flex", flexDirection: "column" }} >

              <Box sx={{ typography: "h5" }}>
                Tammy Thompson
                </Box>
              <Box
                sx={{
                  typography: "subtitle1",
                  color: "text.secondary",
                  textAlign: "center",
                }}
              >
                general job description
              </Box>

              <Box sx={{ typography: "subtitle2", textAlign: "right" }}>
                <AdminPanelSettingsIcon /> 7 Badges
              </Box>

            </CardContent>

      

        </Card>

        <ProfileData />
      </Paper>
    </Container>
  );
}
