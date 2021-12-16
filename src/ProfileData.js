import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import ShieldIcon from "@mui/icons-material/Shield";
import Badge from "@mui/material/Badge";

export default function ProfileData() {
  return (
    <>
      <Box
        sx={{
          typography: "h6",
          fontWeight: 400,
          boxSizing: "border-box",
          ml: 20,
          pb: 3,
        }}
      >
        Project Name
      </Box>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box sx={{ typography: "subtitle1" }}>
            Project Manager (2 Badges)
            <Badge badgeContent={2} color="secondary">
              <ShieldIcon color="primary" />
            </Badge>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ mb: 5, px: 10 }}>
          <Typography variant="body1" align="justify">
            Project A
          </Typography>
          <Typography variant="body1">Project C </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="subtitle1">
            Project Architect (1 Badge)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">Project B </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="subtitle1">Web Developer (1 Badge)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">Project D </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
