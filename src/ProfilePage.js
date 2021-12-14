import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import logo from "./logo.svg";

export default function ProfileCard() {
  return (
    <Card sx={{ minWidth: 350, display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={logo}
        alt="Employee Image"
      />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Tammy Thompson
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            general job description
          </Typography>

          <Typography variant="subtitle2" gutterBottom component="div">
            7 Badges
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
